import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from './table';
import { Container, PrimaryTitle, Row, Col } from './styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { mdiDatabase, mdiLoading } from '@mdi/js';
import { ConnectionsContext } from './contexts';
import { createUseStyles } from 'react-jss';
import Loading from './misc/Loading';
import classnames from 'classnames';
import { Http } from '../classes';
import Icon from '@mdi/react';

export default function Database() {
    const styles = createUseStyles({
        tableLinks: {
            marginRight: 10,
        },
        tableLink: {
            backgroundColor: 'var(--table-primary)',
            textDecoration: 'none',
            fontSize: '1.25rem',
            textAlign: 'left',
            cursor: 'pointer',
            marginBottom: 2,
            padding: 15,
            border: 0,
            '&:hover': {
                backgroundColor: 'var(--table-secondary)',
            },
            '&.active': {
                backgroundColor: 'var(--color-primary-dark)',
                color: 'var(--color-primary)',
                fontWeight: 'bold',
            },
            '&:last-child': {
                marginBottom: 0,
            },
        },
        rows: {
            maxWidth: 'calc(100vw - var(--container-margin))',
            position: 'relative',
            overflowX: 'auto',
        },
        tableWrapper: {
            position: 'relative',
            width: '80vw',
        },
    });
    const classes = styles();

    const { setConnections } = useContext(ConnectionsContext);
    const { name, activeTable, page } = useParams();

    const [columns, setColumns] = useState([]);
    const [tables, setTables] = useState([]);
    const [rows, setRows] = useState([]);

    const [loadingDatabase, setLoadingDatabase] = useState(true);
    const [loadingRows, setLoadingRows] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function getTables() {
            setLoadingDatabase(true);
            const { code, data } = await Http.get(`/databases/${name}`);
            setLoadingDatabase(false);
            setTables(data);
            if (code < 200 || code >= 300) {
                setError('Something went wrong loading the database');
            }
        }
        getTables();
    }, [name]);

    useEffect(() => {
        (async function() {
            setLoadingRows(true);
            async function getRows() {
                const { code, data } = await Http.get(`/databases/${name}/${activeTable}`);
                setRows(data);
                if (code < 200 || code >= 300) {
                    setError('Something went wrong loading the table rows');
                }
            }
            async function getColumns() {
                const { code, data } = await Http.get(`/databases/${name}/${activeTable}/columns`);
                setColumns(data);
                if (code < 200 || code >= 300) {
                    setError('Something went wrong loading the table columns');
                }
            }
            await getColumns();
            await getRows();
            setLoadingRows(false);
        })();
    }, [name, activeTable]);
    
    function renderTable() {
        if (!activeTable) {
            return;
        }

        let columnsJsx = [];
        for (const property in columns) {
            columnsJsx.push(
                <TableHeader key={property} title={columns[property].primaryKey ? 'Primary key' : null}>
                    {property}
                </TableHeader>
            );
        }

        const rowsJsx = rows.map(row => {
            let cells = [];
            for (const property in row) {
                cells.push(row[property]);
            }
            return (
                <TableRow key={Math.random()}>
                    {
                        cells.map(cell => (
                            <TableCell title={cell?.length >= 150 ? cell : null} key={cell}>
                                {cell?.length >= 150 ? `${cell.substring(0, 150)} ...` : cell}
                            </TableCell>
                        ))
                    }
                </TableRow>
            );
        });

        return (
            <>
                <TableHead>
                    {columnsJsx}
                </TableHead>
                <TableBody>
                    {rowsJsx}
                </TableBody>
            </>
        );
    }

    return (
        <Container>
            {
                loadingDatabase
                    ? <Loading />
                    : <>
                        <PrimaryTitle>
                            <Icon path={mdiDatabase} />
                            <span>{name}</span>
                        </PrimaryTitle>
                        <Row className={classnames(classes.rows)}>
                            <Col className={classnames(classes.tableLinks)} as="ul">
                                {
                                    tables.map(({ table }) => (
                                        <NavLink
                                            className={classnames(classes.tableLink)}
                                            to={`/database/${name}/${table}`}
                                            key={table}
                                        >
                                            {table}
                                        </NavLink>
                                    ))
                                }
                            </Col>
                            <div className={classnames(classes.tableWrapper)}>
                                {
                                    loadingRows
                                        ? <Loading className="center" />
                                        : <Table>{renderTable()}</Table>
                                }
                            </div>
                        </Row>
                    </>
            }
            {!loadingDatabase && !tables.length && <p className="errorText">The database is completely empty</p>}
            {error && <p className="errorText">{error}</p>}
        </Container>
    );
}

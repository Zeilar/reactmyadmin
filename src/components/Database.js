import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from './table';
import { Container, PrimaryTitle, Row, Col } from './styled-components';
import { mdiDatabase, mdiLoading, mdiKeyVariant } from '@mdi/js';
import React, { useState, useEffect, useContext } from 'react';
import { ConnectionsContext } from './contexts';
import { useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
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
            textAlign: 'left',
            cursor: 'pointer',
            marginBottom: 2,
            padding: 15,
            border: 0,
            '&.active': {
                backgroundColor: 'var(--color-primary-dark)',
                color: 'var(--color-primary)',
                fontWeight: 'bold',
            },
            '&:last-child': {
                marginBottom: 0,
            },
        },
    });
    const classes = styles();

    const { connections } = useContext(ConnectionsContext);
    const { name } = useParams();

    const [activeTable, setActiveTable] = useState(connections.find(connection => connection?.database === name)?.activeTable);
    const [loadingDatabase, setLoadingDatabase] = useState(true);
    const [tables, setTables] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function getDatabase() {
            setLoadingDatabase(true);
            const { code, data } = await Http.get('/databases/tph');
            setLoadingDatabase(false);
            setTables(data);
            if (code < 200 || code >= 300) {
                setError('Something went wrong loading the database');
            }
        }
        getDatabase();
    }, []);
    
    const getTableData = () => tables.find(data => data.table === activeTable) ?? { columns: {}, rows: [] };

    function renderTable() {
        if (!tables.length || !activeTable) {
            return null;
        }

        const table = getTableData();

        let columns = [];
        for (const property in table.columns) {
            columns.push(
                <TableHeader key={property} title={table.columns[property].primaryKey ? 'Primary key' : null}>
                    {property}
                </TableHeader>
            );
        }

        const rows = table.rows.map(row => {
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
                    {columns}
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </>
        );
    }

    return (
        <Container>
            <PrimaryTitle>
                <Icon path={mdiDatabase} />
                <span>{name}</span>
            </PrimaryTitle>
            {
                loadingDatabase
                    ? <Icon className="loading" path={mdiLoading} spin={1} size={2} />
                    : <Row style={{ overflowX: 'auto', maxWidth: 'calc(100vw - var(--container-margin))' }}>
                        <Col className={classnames(classes.tableLinks)} as="ul">
                            {
                                tables.map(({ table }) => (
                                    <li
                                        className={classnames(classes.tableLink, { active: table === activeTable })}
                                        onClick={() => setActiveTable(table)}
                                        key={table}
                                    >
                                        {table}
                                    </li>
                                ))
                            }
                        </Col>
                        <Table>{renderTable()}</Table>
                    </Row>
            }
            {!loadingDatabase && !tables.length && <p className="errorText">The database is completely empty</p>}
            {error && <p className="errorText">{error}</p>}
        </Container>
    );
}

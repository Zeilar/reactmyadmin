import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from './table';
import React, { useState, useEffect } from 'react';
import { Container } from './styled-components';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { Http } from '../classes';

export default function Database() {
    const [activeTable, setActiveTable] = useState('categories');
    const [loadingTable, setLoadingTable] = useState(true);
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        async function getDatabase() {
            setLoadingTable(true);
            const { code, data } = await Http.get('/databases/tph');
            setLoadingTable(false);
            setDatabase(data);
        }
        getDatabase();
    }, []);

    console.log(database);
    
    const getTableData = () => database.find(data => data.table === activeTable) ?? { columns: {}, rows: [] };

    function renderTable() {
        if (!database.length || !activeTable) {
            return null;
        }

        const table = getTableData();

        let columns = [];
        for (const property in table.columns) {
            columns.push(property);
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
                            <TableCell key={cell}>
                                {cell}
                            </TableCell>
                        ))
                    }
                </TableRow>
            );
        });

        return (
            <>
                <TableHead>
                    {
                        columns.map(column => (
                            <TableHeader key={column}>
                                {column}
                            </TableHeader>
                        ))
                    }
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </>
        );
    }

    return (
        <Container>
            <Table>
                {renderTable()}
            </Table>
        </Container>
    );
}

import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { TableCell } from './';

export default function TableRow({ className = '', data = [], actions = [], ...props }) {
    const styles = createUseStyles({
        row: {
            backgroundColor: 'var(--table-primary)',
            '&:nth-child(odd)': {
                backgroundColor: 'var(--table-secondary)',
            },
        },
    });
    const classes = styles();

    console.log(data);

    function parseCells() {
        const parsed = {};
        for (const property in data) {
            if (property !== '_id') {
                parsed[property] = data[property];
            }
        }

        const cells = [];
        for (const property in parsed) {
            cells.push(parsed[property]);
        }
        return cells;
    }

    return (
        <tr className={classnames(classes.row, className)} {...props}>
            {parseCells().map(cell => <TableCell data={cell} />)}
        </tr>
    );
}

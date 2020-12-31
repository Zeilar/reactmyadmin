import { createUseStyles } from 'react-jss';
import React, { useState } from 'react';
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

    const [row, setRow] = useState(data);

    function parseCells() {
        const parsed = {};
        for (const property in row) {
            if (property !== '_id') {
                parsed[property] = row[property];
            }
        }

        const cells = [];
        for (const property in parsed) {
            cells.push(<TableCell id={property} key={property} data={parsed[property]} save={save} setRow={setRow} />);
        }
        return cells;
    }

    function save() {
        actions.save(row);
        console.log('save', row);
    }

    return (
        <tr className={classnames(classes.row, className)} {...props}>
            {parseCells()}
        </tr>
    );
}

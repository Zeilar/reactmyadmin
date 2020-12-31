import { TableBody, TableHead, TableRow, TableHeader } from './';
import { createUseStyles } from 'react-jss';
import React, { useState } from 'react';
import classnames from 'classnames';

export default function Table({ className = '', columns = [], rows = [], ...props }) {
    const styles = createUseStyles({
        table: {
            position: 'relative',
            width: '80vw',
        },
    });
    const classes = styles();

    return (
        <table className={classnames(classes.table, className)} {...props}>
            {rows.map(row => <TableRow key={Math.random()} data={row.data} actions={row.actions} />)}
        </table>
    );
}

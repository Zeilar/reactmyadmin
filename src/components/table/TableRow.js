import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableRow({ children }) {
    const styles = createUseStyles({
        row: {
            backgroundColor: 'var(--table-primary)',
            '&:nth-child(odd)': {
                backgroundColor: 'var(--table-secondary)',
            },
        },
    });
    const classes = styles();

    return (
        <tr className={classnames(classes.row)}>
            {children}
        </tr>
    );
}

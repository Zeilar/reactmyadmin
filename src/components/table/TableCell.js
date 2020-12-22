import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableCell({ children }) {
    const styles = createUseStyles({
        cell: {
            padding: 10,
        },
    });
    const classes = styles();

    return (
        <td className={classnames(classes.cell)}>
            {children}
        </td>
    );
}

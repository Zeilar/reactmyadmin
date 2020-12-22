import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableCell({ children, className, ...props }) {
    const styles = createUseStyles({
        cell: {
            wordBreak: 'break-all',
            maxWidth: '20rem',
            padding: 10,
        },
    });
    const classes = styles();

    return (
        <td className={classnames(classes.cell, className)} {...props}>
            {children}
        </td>
    );
}

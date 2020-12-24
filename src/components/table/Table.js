import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import React from 'react';

export default function Table({ children, className, ...props }) {
    const styles = createUseStyles({
        table: {
            position: 'relative',
            width: '80vw',
        },
    });
    const classes = styles();

    return (
        <table className={classnames(classes.table, className)} {...props}>
            {children}
        </table>
    );
}

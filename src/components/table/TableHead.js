import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import React from 'react';

export default function TableHead({ children, className, ...props }) {
    const styles = createUseStyles({
        thead: {
            backgroundColor: 'var(--color-primary-dark)',
            color: 'var(--color-primary)',
            fontSize: '1.25rem',
            textAlign: 'left',
        },
    });
    const classes = styles();

    return (
        <thead className={classnames(classes.thead, className)} {...props}>
            {children}
        </thead>
    );
}

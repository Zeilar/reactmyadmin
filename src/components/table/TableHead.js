import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import React from 'react';

export default function TableHead({ children }) {
    const styles = createUseStyles({
        thead: {
            backgroundColor: 'rgb(26, 64, 74)',
            color: 'var(--color-primary)',
            fontSize: '1.25rem',
            textAlign: 'left',
        },
    });
    const classes = styles();

    return (
        <thead className={classnames(classes.thead)}>
            {children}
        </thead>
    );
}

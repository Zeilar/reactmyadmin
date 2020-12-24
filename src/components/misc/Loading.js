import { mdiDatabase, mdiLoading } from '@mdi/js';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import Icon from '@mdi/react';
import React from 'react';

export default function Loading({ spinner = false, size = 2, spin = 1, className = '', ...props }) {
    const styles = createUseStyles({
        '@keyframes pulse': {
            '0%': { opacity: 1 },
            '50%': { opacity: 0.1 },
            '100%': { opacity: 1 },
        },
        database: {
            animation: '$pulse 1.5s infinite',
        },
        loading: {
            color: 'var(--color-primary)',
            margin: 'auto',
            '&.center': {
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                left: '50%',
                top: '50%',
            },
        },
    });
    const classes = styles();

    if (spinner) {
        return <Icon className={classnames(classes.loading, className)} path={mdiLoading} size={size} spin={spin} {...props} />
    }

    return (
        <Icon className={classnames(classes.database, classes.loading, className)} path={mdiDatabase} size={size} {...props} />
    );
}

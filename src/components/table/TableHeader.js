import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableHeader({ children, className, ...props }) {
    const styles = createUseStyles({
        header: {
            padding: 10,
        },
    });
    const classes = styles();

    return (
        <th className={classnames(classes.header, className)} {...props}>
            {children}
        </th>
    );
}

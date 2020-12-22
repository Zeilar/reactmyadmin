import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableHeader({ children }) {
    const styles = createUseStyles({
        header: {
            padding: 10,
        },
    });
    const classes = styles();

    return (
        <th className={classnames(classes.header)}>
            {children}
        </th>
    );
}

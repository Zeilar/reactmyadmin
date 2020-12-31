import useOnclickOutside from 'react-cool-onclickoutside';
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableCell({ className = '', data = '', actions = [], ...props }) {
    const styles = createUseStyles({
        cell: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '20rem',
            padding: 10,
        },
        input: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            resize: 'none',
            padding: 8,
        },
    });
    const classes = styles();

    const [localData, setLocalData] = useState(data);
    const [editing, setEditing] = useState(false);

    console.log(data, actions);

    return (
        <td className={classnames(classes.cell, className)} {...props}>
            {localData}
        </td>
    );
}

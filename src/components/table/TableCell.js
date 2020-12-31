import useOnclickOutside from 'react-cool-onclickoutside';
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableCell({ className = '', id = '', data = '', save, setRow, ...props }) {
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

    const [localState, setLocalState] = useState(data);
    const [editing, setEditing] = useState(false);

    function onChangeHandler(e) {
        setLocalState(e.target.value);

        // Find the property whose key matches this cell's id
        // Merge the new value into that slot of the new object
        setRow(p => ({ ...p, [Object.keys(p).find(key => key === id)]: e.target.value }));
    }

    return (
        <td className={classnames(classes.cell, className)} {...props}>
            {data}
            <input type="text" value={localState} onChange={onChangeHandler} />
            <button onClick={save}>save</button>
        </td>
    );
}

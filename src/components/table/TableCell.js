import useOnclickOutside from 'react-cool-onclickoutside';
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableCell({ children, className = '', data = '', save, ...props }) {
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

    const [dataState, setDataState] = useState(data);
    const [editing, setEditing] = useState(false);

    save();

    const cell = useOnclickOutside(() => {
        setEditing(false);
        // save row
    });

    return (
        <td className={classnames(classes.cell, className)} onDoubleClick={() => setEditing(true)} ref={cell} {...props}>
            {
                editing
                    ? <textarea
                        onChange={e => setDataState(e.target.value)}
                        rows={Math.ceil(dataState.length / 17)}
                        className={classnames(classes.input)}
                        value={dataState}
                    ></textarea>
                    : children
            }
        </td>
    );
}

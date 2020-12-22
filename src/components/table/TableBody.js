import React, { useState, useEffect, Children } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function TableBody({ children }) {
    return (
        <tbody>
            {children}
        </tbody>
    );
}

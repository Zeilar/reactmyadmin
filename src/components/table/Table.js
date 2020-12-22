import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export default function Table({ children }) {
    return (
        <table>
            {children}
        </table>
    );
}

import React, { useState, useRef, useEffect, useContext } from 'react';
import { ButtonOutline, Container } from './styled-components';
import { ConnectionsContext } from './contexts';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

export default function Start() {
    const styles = createUseStyles({
        start: {

        },  
    });
    const classes = styles();

    const { connections } = useContext(ConnectionsContext);

    // console.log(connections);

    return (
        <Container className={classnames(classes.start, 'center-children')}>
            <ButtonOutline as={NavLink} to="/database/tph">Test TPH db</ButtonOutline>
        </Container>
    );
}

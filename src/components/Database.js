import React, { useState, useEffect } from 'react';
import { Container } from './styled-components';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { Http } from '../classes';

export default function Database() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        async function getDatabase() {
            const { code, data } = await Http.get('/databases/tph');
            setDatabase(data);
        }
        getDatabase();
    }, []);

    console.log(database);

    return (
        <Container>
            Database
        </Container>
    );
}

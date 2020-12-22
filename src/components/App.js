import { ConnectionsContextProvider } from './contexts';
import React, { useState, useEffect } from 'react';
import Routes from './Routes';

export default function App() {
    return (
        <ConnectionsContextProvider>
            <Routes />
        </ConnectionsContextProvider>
    );
}

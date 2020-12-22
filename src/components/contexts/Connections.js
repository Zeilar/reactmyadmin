import React, { createContext, useState, useEffect } from 'react';
import { Http } from '../../classes';

export const ConnectionsContext = createContext();

export function ConnectionsContextProvider({ children }) {
    const [loadingConnections, setLoadingConnections] = useState(false);
    const [connections, setConnections] = useState([]);

    async function getConnections() {
        setLoadingConnections(true);
        setLoadingConnections(false);
        // setConnections(data);
    }

    useEffect(() => {
        getConnections();
    }, []);

    return (
        <ConnectionsContext.Provider value={{ connections, setConnections, loadingConnections, setLoadingConnections }}>
            {children}
        </ConnectionsContext.Provider>
    );
}
import React, { createContext, useState, useEffect } from 'react';

export const ConnectionsContext = createContext();

export function ConnectionsContextProvider({ children }) {
    const [connections, setConnections] = useState(JSON.parse(localStorage.getItem('connections')) ?? []);

    useEffect(() => {
        localStorage.setItem('connections', JSON.stringify(connections));
    }, [connections]);

    return (
        <ConnectionsContext.Provider value={{ connections, setConnections }}>
            {children}
        </ConnectionsContext.Provider>
    );
}
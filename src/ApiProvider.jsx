import { Outlet } from 'react-router-dom';
import { createContext, useMemo } from 'react';
import { Header } from './shared/components/Header/Header';
import { Sidebar } from './shared/components/Sidebar/Sidebar';

export const ApiContext = createContext({});

export const ApiProvider = () => {

    const value = useMemo(() => ({}), []);

    return (
        <ApiContext.Provider value={value}>
            
        </ApiContext.Provider>
    );
};
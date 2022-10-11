import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const DataContext = createContext([])
const Root = () => {
    const { Data, initialData } = useLoaderData();
    console.log(Data);
    return (
        <>
            <DataContext.Provider value={Data}>
                <Header />
                <Outlet />
                <Footer />
            </DataContext.Provider>
        </>
    );
};

export default Root;
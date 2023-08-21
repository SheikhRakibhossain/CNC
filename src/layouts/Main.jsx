import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />

        </>
    );
};

export default Main;
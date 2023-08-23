import React from 'react';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default UserLayout;
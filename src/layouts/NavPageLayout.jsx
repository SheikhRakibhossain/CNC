import React from 'react';
import BottomNav from '../pages/shared/bottomNav/BottomNav';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const NavPageLayout = () => {
    return (
        <>
            <BottomNav />
                <Outlet />
            <Footer />

        </>
    );
};

export default NavPageLayout;
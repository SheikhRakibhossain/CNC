import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const UserLayout = () => {
    return (
        <>
            <Container fluid>
                <Outlet />
            </Container>
        </>
    );
};

export default UserLayout;
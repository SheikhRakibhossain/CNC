import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../components/LeftNav/LeftNav';
import RightNav from '../components/rightNav/RightNav';

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}><LeftNav/></Col>
                    <Col lg={6}><h3><Outlet /> </h3></Col>
                    <Col lg={3}><RightNav/></Col>
                </Row>
            </Container>
            <Footer />

        </>
    );
};

export default Main;
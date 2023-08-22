import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../components/rightNav/RightNav';

const NewsLayout = () => {
    return (
        <>
        <Header />
        <Container className='py-4'>
            <Row>
                <Col lg={9}><h3><Outlet /> </h3></Col>
                <Col lg={3}><RightNav/></Col>
            </Row>
        </Container>
        <Footer />

    </>
    );
};

export default NewsLayout;
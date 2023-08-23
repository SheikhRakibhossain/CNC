import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../components/LeftNav/LeftNav';
import RightNav from '../components/rightNav/RightNav';
import Insights from '../components/insights/Insights';

const Main = () => {
    return (
        <>
            <Header />
            <Container className='py-4'>
                <Row className='pb-5'>
                    <Col lg={3}><LeftNav/></Col>
                    <Col lg={6}><Outlet /></Col>
                    <Col lg={3}><RightNav/></Col>
                </Row>
            <Insights/>
            </Container>
            <Footer />

        </>
    );
};

export default Main;
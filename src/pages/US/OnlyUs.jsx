import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import us1 from '../../assets/us/us1.jpg';
import us2 from '../../assets/us/us2.jpg';
import us3 from '../../assets/us/us3.jpg';
import us4 from '../../assets/us/us4.jpg';

const OnlyUs = () => {
    return (
        <Container className='py-4 container-fluid'>

            <h1>US</h1>
            <hr className="border border-dark " />
            <Row>
                <Col lg={6} xs={12} >
                    <div className='latestCard '>
                        <Link to='/' >
                            <img src={us1} alt="us image" />
                            <h3 className='text-uppercase fst-italic py-4 fs-4'>Why this photographer wants to see more women like her behind the lens...</h3>
                        </Link>
                    </div>
                    {/* Horizontal card section */}
                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />

                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />

                    
                </Col>

                <Col lg={3} xs={12}>
                    <Link to='/' >
                        <img src={us2} alt="card Image" />
                        <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                    </Link>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    



                </Col>

                <Col lg={3} xs={12}>
                    <Link to='/' >
                        <img src={us3} alt="card Image" />
                        <p>Why this photographer wants to see more women like her behind the lens</p>
                    </Link>
                    <Link to='/' >
                        <img src={us4} alt="card Image" />
                        <p>Why this photographer wants to see more women like her behind the lens</p>
                    </Link>
                    
                </Col>
            </Row>

        </Container>
    );
};

export default OnlyUs;
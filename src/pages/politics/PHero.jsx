import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import kim from '../../assets/politics/kim.jpg';
import trump from '../../assets/politics/trump.jpg';
import cry from '../../assets/politics/motherCry.jpg';
import harris from '../../assets/politics/harries.jpg';
import judge from '../../assets/politics/bidenINjudges.jpg';
import fact from '../../assets/politics/fact.jpg';


const PHero = () => {
    return (
        <>
        <h1>Politics</h1>
            <hr className="border border-dark " />
            <Row>
                <Col lg={6} xs={12} >
                    <div className='latestCard '>
                        <Link to='/' >
                            <img src={kim} alt="us image" />
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
                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />
                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />

                    
                </Col>

                <Col lg={3} xs={12}>
                    <Link to='/' >
                        <img src={trump} alt="card Image" />
                        <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                    </Link>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <Link to='/' >
                        <img src={cry} alt="card Image" />
                        <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                    <hr className="border opacity-50" />
                   


                </Col>

                <Col lg={3} xs={12}>
                    <Link to='/' >
                        <img src={harris} alt="card Image" />
                        <p>Why this photographer wants to see more women like her behind the lens</p>
                    </Link>
                    <Link to='/' >
                        <img src={judge} alt="card Image" />
                        <p>Why this photographer wants to see more women like her behind the lens</p>
                    </Link>
                    
                    <Link to='/' >
                        <img src={fact} alt="card Image" />
                        <p>Why this photographer wants to see more women like her behind the lens</p>
                    </Link>
                    
                </Col>
            </Row>
            
        </>
    );
};

export default PHero;
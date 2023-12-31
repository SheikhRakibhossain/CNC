import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import latestMainImage from '../../assets/girlscat/latestMain.jpg';
import latestImage1 from '../../assets/girlscat/latest-11.jpg';
import latestImage2 from '../../assets/girlscat/latest-2.jpg';
import latestImage3 from '../../assets/girlscat/latest-3.jpg';
import latestImage4 from '../../assets/girlscat/latestImage-4.jpg';
import cosmology from "../../assets/girlscat/cosmology.webp"
import vermentLaw from "../../assets/girlscat/vermentLaw.webp"
import jhosFrankLink from "../../assets/girlscat/jhosFrankLink.webp"
import bigBusiness from "../../assets/girlscat/bigBusiness.webp"

import './LatestStyle.css';

const LatestStyle = () => {
    return (
        <>
            <Container className='py-4 container-fluid'>
                <Row>
                    <Col lg={6} xs={12} >
                        <div className='latestCard '>
                            <Link to='/' >
                                <img src={latestMainImage} alt="card Image" />
                                <h3 className='text-uppercase fst-italic py-4 fs-4'>Why this photographer wants to see more women like her behind the lens...</h3>
                            </Link>
                        </div>
                        {/* Horizontal card section */}
                        <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0 latestCard ">
                                <div className="col-md-4">
                                    <img src={cosmology} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p>
                                            ‘Cosmology’: The Japanese skincare range designed for astronauts...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0 latestCard ">
                                <div className="col-md-4">
                                    <img src={jhosFrankLink} className="img-fluid rounded-start" alt="frank link" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p>
                                            The last photos of John Franklin’s doomed polar expedition party are going on sale...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0 latestCard ">
                                <div className="col-md-4">
                                    <img src={vermentLaw} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p>
                                            Vermont law school can hide a controversial mural depicting slavery, court rules...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0 latestCard ">
                                <div className="col-md-4">
                                    <img src={bigBusiness} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p>
                                            Once, if you were talking about going to the salon for a trim, a restyle....
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col lg={3} xs={12}>
                        <Link to='/' >
                            <img src={latestImage3} alt="card Image" />
                            <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>

                        <Link to='/' >
                            <img src={latestImage1} alt="card Image" />
                            <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>
                        <Link to='/' >
                            <img src={latestImage2} alt="card Image" />
                            <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>

                    </Col>

                    <Col lg={3} xs={12}>
                        <Link to='/' >
                            <img src={latestImage4} alt="card Image" />
                            <p>Why this photographer wants to see more women like her behind the lens</p>
                        </Link>
                    </Col>
                </Row>

            </Container>



        </>
    );
};

export default LatestStyle;
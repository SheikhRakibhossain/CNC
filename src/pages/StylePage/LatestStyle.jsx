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
import './LatestStyle.css';

const LatestStyle = () => {
    return (
        <>
            <Container className='py-4 container-fluid'>
                <Row>
                    <Col lg={6} xs={12} className='latestCard '>
                        <Link to='/' >
                            <img src={latestMainImage} alt="card Image" />
                            <h3 className='text-uppercase fst-italic py-4 fw-light link-offset-3-hover'>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>

                    </Col>

                    <Col lg={3} xs={12}>
                        <Link to='/' >
                            <img src={latestImage3} alt="card Image" />
                            <h3 className='fs-5 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>

                        <Link to='/' >
                            <img src={latestImage1} alt="card Image" />
                            <h3 className='fs-5 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>
                        <Link to='/' >
                            <img src={latestImage2} alt="card Image" />
                            <h3 className='fs-5 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>

                    </Col>

                    <Col lg={3} xs={12}>
                        <Link to='/' >
                            <img src={latestImage4} alt="card Image" />
                            <h3 className='text-uppercase fst-italic py-4 fw-light link-offset-3-hover'>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>
                    </Col>
                </Row>

            </Container>



        </>
    );
};

export default LatestStyle;
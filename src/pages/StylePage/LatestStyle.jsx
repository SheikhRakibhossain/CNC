import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import latestImage1 from '../../assets/girlscat/latestMain.jpg';
import latestMainImage from '../../assets/girlscat/latest-1.jpg';
import latestImage2 from '../../assets/girlscat/latest-2.jpg';
import latestImage3 from '../../assets/girlscat/latest-3.jpg';
import latestImage4 from '../../assets/girlscat/latest-4.jpg';
import './LatestStyle.css';

const LatestStyle = () => {
    return (
        <>
            <Container className='py-4'>
                <Row>
                    <Col lg={6} xs={12} className='latestCard '>
                        <Link to='/' >
                            <img src={latestMainImage} alt="" />
                            <h3 className='text-uppercase fst-italic py-4 fw-light link-offset-3-hover'>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>
                    
                    </Col>

                    <Col lg={3} xs={12}>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, obcaecati.</h1>
                    </Col>

                    <Col lg={3} xs={12}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum officia nisi quia esse, consequuntur ex dolorem. Ratione, illo autem.</p>
                    </Col>
                </Row>

            </Container>



        </>
    );
};

export default LatestStyle;
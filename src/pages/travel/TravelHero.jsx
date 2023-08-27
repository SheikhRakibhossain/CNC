import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../assets/girlscat/girl.jpg'
import image2 from '../../assets/girlscat/cutegirl.jpg'
import image3 from '../../assets/girlscat/cutegirls.jpg'

const TravelHero = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <img src={image1} alt="" />
                </Col>

                <Col sm={6}>
                    <Row>
                        <img style={{ maxHeight: '300px' }} src={image3} alt="" />
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                            <img src={image2} alt="" />
                        </Col>

                        <Col>
                            <img src={image2} alt="" />
                        </Col>
                    </Row>


                </Col>
            </Row>
        </Container>
    );
};

export default TravelHero;
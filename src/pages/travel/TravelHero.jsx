import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../assets/girlscat/girl.jpg'
import image2 from '../../assets/girlscat/cutegirl.jpg'

const TravelHero = () => {
    return (
        <Container>
            <Row>
                <Col className='min-h-'>
                    <img src={image1} alt="" />
                </Col>

                <Col>
                    <Row>
                        <img src={image2} alt="" />
                    </Row>
                    <Row>
                        <Col>
                            <img src={image1} alt="" />
                        </Col>

                        <Col>
                            <img src={image1} alt="" />
                        </Col>
                    </Row>


                </Col>
            </Row>
        </Container>
    );
};

export default TravelHero;
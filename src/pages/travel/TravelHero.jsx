import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../assets/girlscat/girl.jpg'
import image2 from '../../assets/girlscat/cutegirl.jpg'
import image3 from '../../assets/girlscat/cutegirls.jpg'

const TravelHero = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    
                    <Card className="bg-dark text-white">
                        <Card.Img src={image1} alt=" image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
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
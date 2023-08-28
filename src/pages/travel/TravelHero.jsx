import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import image1 from '../../assets/girlscat/girl.jpg'
import image2 from '../../assets/girlscat/cutegirl.jpg'
import image3 from '../../assets/girlscat/cutegirls.jpg'

const TravelHero = () => {
    return (
        <Container>
            <Row >
                <Col sm={6} className='relative'>
                    <div className="card text-bg-dark">
                        <img src={image1} className="card-img " alt="img" />
                        <div className="card-img-overlay d-flex flex-column justify-content-between">
                            <div><p className="badge bg-warning">Hello</p></div>
                            <div>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col sm={6}>
                    <Row>
                        <div className="card text-white ">
                            <img src={image3} className="card-img " alt="img" />
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div><p className="badge bg-warning">Hello</p></div>
                                <div>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                            <div className="card text-bg-dark none">
                                <img src={image2} className="card-img img-cover " alt="img" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                    <div><p className='badge bg-warning'>New</p></div>
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="card text-bg-dark">
                                <img src={image2} className="card-img " alt="img" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                    <div><p className="badge bg-warning">Hello</p></div>
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </Col>
            </Row>

        </Container>
    );
};

export default TravelHero;
import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import design1 from '../../assets/girlscat/design1.jpg';
import design2 from '../../assets/girlscat/design2.jpg';
import hotCity from '../../assets/girlscat/hotCity.jpg';
import appleStroke from '../../assets/girlscat/appleStrocke.jpg';
import parisPen from '../../assets/girlscat/parisPen.jpg';
import ken from '../../assets/girlscat/ken.jpg';

const Design = () => {
    return (
        <Container className='py-4'>
            <h1 className=''>Design</h1>
            <hr className="border border-dark border-1 opacity-75" />
            <Row>
                <Col lg={5}>
                    <div>
                        <img src={design1} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est saepe temporibus vero amet nihil corrupti quo ratione perferendis sapiente aperiam, suscipit asperiores accusamus. Nam!</p>
                        <hr className="border opacity-50" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>
                        <hr className="border opacity-50 " />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>

                    </div>
                    <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                        <div className="row g-0 latestCard ">
                            <div className="col-md-4">
                                <img src={ken} className="img-fluid rounded-start" alt="..." />
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
                                <img src={parisPen} className="img-fluid rounded-start" alt="..." />
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
                </Col>
                <Col lg={5}>
                    <div>
                        <img src={design2} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est saepe temporibus vero amet nihil corrupti quo ratione perferendis sapiente aperiam, suscipit asperiores accusamus. Nam!</p>
                        <hr className="border opacity-50" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>
                        <hr className="border opacity-50 " />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>

                    </div>
                    <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                        <div className="row g-0 latestCard ">
                            <div className="col-md-4">
                                <img src={appleStroke} className="img-fluid rounded-start" alt="..." />
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
                                <img src={hotCity} className="img-fluid rounded-start" alt="..." />
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

                </Col>
            </Row>
        </Container>
    );
};

export default Design;
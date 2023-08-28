import React from 'react';
import animal1 from '../../assets/girlscat/dog.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const AnimalTravel = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="card mb-3" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={animal1} className="img-fluid rounded-start" alt="animal image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={animal1} className="img-fluid rounded-start" alt="animal image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={animal1} className="img-fluid rounded-start" alt="animal image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>

    );
};

export default AnimalTravel;
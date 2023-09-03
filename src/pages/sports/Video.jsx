import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import video1 from '../../assets/sports/video1.jpg'
import video2 from '../../assets/sports/video2.jpg'
import video3 from '../../assets/sports/video3.jpg'
import video4 from '../../assets/sports/video4.jpg';
import video5 from '../../assets/sports/video5.jpg';
import video6 from '../../assets/sports/video6.jpg';
import video7 from '../../assets/sports/video7.jpg';
import video8 from '../../assets/sports/video8.jpg';
import video9 from '../../assets/sports/video9.png';
import video10 from '../../assets/sports/video10.jpg';
import video11 from '../../assets/sports/video11.jpg';
import video12 from '../../assets/sports/video12.jpg';

const Video = () => {
    return (
        <>
            <Container className='py-4 container-fluid'>

                <h1>Video</h1>
                <hr className="border border-dark " />
                <Row>
                    <Col lg={6} xs={12} >
                        <div className='latestCard '>
                            <Link to='/' >
                                    <img src={video1} alt="Video image" />
                                        <h3 className='text-uppercase fst-italic py-4 fs-4'>Why this photographer wants to see more women like her behind the lens...</h3>
                                    </Link>
                                </div>
                                {/* Horizontal card section */}
                                <div className="card mb-3 mt-4" style={{ maxWidth: '540px;'}}>
                                    <div className="row g-0 latestCard ">
                                        <div className="col-md-4">
                                            <img src={video8} className="img-fluid rounded-start" alt="..." />
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
                                            <img src={video9} className="img-fluid rounded-start" alt="frank link" />
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
                                            <img src={video11} className="img-fluid rounded-start" alt="..." />
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
                                <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                                    <div className="row g-0 latestCard ">
                                        <div className="col-md-4">
                                            <img src={video12} className="img-fluid rounded-start" alt="..." />
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
                                    <img src={video2} alt="card Image" />
                                    <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                                </Link>
                                <Link to='/' >
                                    <img src={video3} alt="card Image" />
                                    <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                                </Link>
                                <Link to='/' >
                                    <img src={video4} alt="card Image" />
                                    <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                                </Link>

                            </Col>

                            <Col lg={3} xs={12}>
                                <Link to='/' >
                                    <img src={video5} alt="card Image" />
                                    <p>Why this photographer wants to see more women like her behind the lens</p>
                                </Link>
                                <Link to='/' >
                                    <img src={video6} alt="card Image" />
                                    <p>Why this photographer wants to see more women like her behind the lens</p>
                                </Link>
                                <Link to='/' >
                                    <img src={video7} alt="card Image" />
                                    <p>Why this photographer wants to see more women like her behind the lens</p>
                                </Link>
                                
                            </Col>
                        </Row>

                    </Container>
                </>
                );
};

                export default Video;
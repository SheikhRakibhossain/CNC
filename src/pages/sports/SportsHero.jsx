import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import novak from '../../assets/sports/Novak.jpg';
import Ertz from '../../assets/sports/Ertz.jpg';
import hero1 from '../../assets/sports/hero1.jpg';
import hero2 from '../../assets/sports/hero2.jpg';
import hero3 from '../../assets/sports/hero3.jpg';
import hero4 from '../../assets/sports/hero4.jpg';
import hero5 from '../../assets/sports/hero5.jpg';
import BilliAndZine from '../../assets/sports/BilliAndZine.jpg';
import novakand from '../../assets/sports/novakandVizi.jpg';
import jhon from '../../assets/sports/Jhon.jpg';
import billi from '../../assets/sports/BilliAndZine.jpg';


const SportsHero = () => {
    return (
        <Container className='py-4 container-fluid'>
                <Row>
                    <Col lg={6} xs={12} >
                        <div className='latestCard '>
                            <Link to='/' >
                                <img src={novak} alt="Novaks image" />
                                <h3 className='text-uppercase fst-italic py-4 fs-4'>Why this photographer wants to see more women like her behind the lens...</h3>
                            </Link>
                        </div>
                        {/* Horizontal card section */}
                        <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                            <div className="row g-0 latestCard ">
                                <div className="col-md-4">
                                    <img src={hero1} className="img-fluid rounded-start" alt="..." />
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
                                    <img src={hero2} className="img-fluid rounded-start" alt="frank link" />
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
                                    <img src={hero3} className="img-fluid rounded-start" alt="..." />
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
                                    <img src={hero4} className="img-fluid rounded-start" alt="..." />
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
                                    <img src={hero5} className="img-fluid rounded-start" alt="..." />
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
                            <img src={Ertz} alt="card Image" />
                            <h3 className='fs-6 text-uppercase fst-normal py-2 fw-bold '>Why this photographer wants to see more women like her behind the lens</h3>
                        </Link>
                        
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        
                        <hr className="border opacity-50" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit</p>
                        <hr className="border opacity-50" />
                        
                        

                    </Col>

                    <Col lg={3} xs={12}>
                        <Link to='/' >
                            <img src={billi} alt="card Image" />
                            <p>Why this photographer wants to see more women like her behind the lens</p>
                        </Link>
                        <Link to='/' >
                            <img src={novakand} alt="card Image" />
                            <p>Why this photographer wants to see more women like her behind the lens</p>
                        </Link>
                        <Link to='/' >
                            <img src={jhon} alt="card Image" />
                            <p>Why this photographer wants to see more women like her behind the lens</p>
                        </Link>
                        <Link to='/' >
                            <img src={BilliAndZine} alt="card Image" />
                            <p>Why this photographer wants to see more women like her behind the lens</p>
                        </Link>
                        <Link to='/' >
                            <img src={hero3} alt="card Image" />
                            <p>Why this photographer wants to see more women like her behind the lens</p>
                        </Link>
                    </Col>
                </Row>

        </Container>
    );
};

export default SportsHero;
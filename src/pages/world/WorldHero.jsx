import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import worldHero from '../../assets/world/worldHero.jpg'

const WorldHero = () => {
    return (
        <Row className='py-5'>
            <Col lg={6} sm={12} >
                <h2>World</h2>
            <div>
                    <Link to='/' >
                                <img src={worldHero} alt="card Image" />
                                <h3 className=' text-link text-black py-4 fs-4 fw-bold'>At least 74 dead after fire tears through building used as temporary housing in South Africa</h3>
                    </Link>
            </div>
                <div className="card mb-3 mt-4" style={{ maxWidth: '540px;' }}>
                    <div className="row g-0 latestCard ">
                        <div className="col-md-4">
                            <img src="{cosmology} "className="img-fluid rounded-start" alt="..." />
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
            <Col lg={3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam sequi debitis cupiditate ea tenetur aut! Iure autem sunt ipsam.</Col>
            <Col>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad minus quam quaerat omnis, similique earum aspernatur fugit laborum provident.</Col>

        </Row>
    );
};

export default WorldHero;
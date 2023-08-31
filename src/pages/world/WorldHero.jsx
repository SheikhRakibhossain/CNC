import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import worldHero from '../../assets/world/worldHero.jpg';
import gabon from '../../assets/world/gabon.jpg';
import ChinesePeople from '../../assets/world/chinessPeople.jpg';
import Star from '../../assets/world/star.jpg';

const WorldHero = () => {
    return (
        <>
            <h2 className='py-4'>World</h2>
            <Row>
                <Col lg={6} sm={12} >
                    <div>
                        <Link to='/' >
                            <img src={worldHero} alt="card Image" />
                            <h3 className=' text-link text-black py-4 fs-4 fw-bold'>At least 74 dead after fire tears through building used as temporary housing in South Africa</h3>
                        </Link>
                    </div>
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>The ‘blue moon’ won’t be the only rare sight in the night sky this week</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>What you should know about the St. Elmo’s fire phenomenon — and how to stay safe</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Deadly fire engulfs home warehouse in the Philippines</p>
                    <hr className="border opacity-75" />

                </Col>
                <Col lg={3}>

                    <div>
                        <Link to='/' >
                            <img src={gabon} alt="card Image" />
                            <h3 className=' text-link text-black py-4 fs-4 fw-bold'>Gabon’s military coup has overthrown a powerful political dynasty. Here’s what to know..</h3>
                        </Link>
                    </div>

                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                    <p className='text-link'>Russia claims several Ukrainians killed and detained in foiled sabotage operation.</p>
                    <hr className="border opacity-75" />
                </Col>
                <Col>
                    <div>
                        <Link to='/' >
                            <img src={Star} alt="card Image" />
                            <h3 className=' text-link text-black py-4 fs-4 fw-bold'>Broadway star quits US musical about Tiananmen protests during China tour</h3>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' >
                            <img src={ChinesePeople} alt="card Image" />
                            <h3 className=' text-link text-black py-4 fs-4 fw-bold'>Chinese people are living two years longer thanks to ‘war on pollution,’ report says </h3>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' >
                            <img src={worldHero} alt="card Image" />
                            <h3 className=' text-link text-black py-4 fs-4 fw-bold'>At least 74 dead after fire tears through building used as temporary housing in South Africa</h3>
                        </Link>
                    </div>
                </Col>

            </Row>
        </>
    );
};

export default WorldHero;
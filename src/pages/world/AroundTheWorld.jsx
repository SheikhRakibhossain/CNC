import React from 'react';
import { Col, Row } from 'react-bootstrap';
import arms from '../../assets/world/arms.jpg';
import libya from '../../assets/world/libya.jpg';
import carbon from '../../assets/world/carbondioxide.jpg';
import fire from '../../assets/world/fire.jpg';
import moon from '../../assets/world/superMoon.jpg';
import thunder from '../../assets/world/thunderLight.jpg';


const AroundTheWorld = () => {
    return (
        <>
            <h2 className='pt-4 mt-4 fw-bold fs-3 text-black'>Around the world</h2>
            <Row>
                <Col lg={4}>
                    <div>
                        <hr className='border border-black opacity-100' />
                        <p className='fs-6 fw-bold text-black pt-0'>EUROPE</p>
                        <img src={arms} alt="arms" />
                        <h5 className='text-link py-2'>Well-known Ukrainian pilot ‘Juice’ among 3 dead in plane crash</h5>
                    </div>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                </Col>
                <Col lg={4}>
                    <div>
                        <hr className='border border-black opacity-100' />
                        <p className='fs-6 fw-bold text-black pt-0'>MIDDLE EAST</p>
                        <img src={libya} alt="arms" />
                        <h5 className='text-link py-2'>Libya dismisses foreign minister after meeting with Israeli counterpart causes outcry</h5>
                    </div>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                </Col>
                <Col>
                    <Row className='py-3'>

                        <hr className='border border-black opacity-100' />
                        <p className='fs-6 fw-bold text-black pt-0'>WORLD IN PHOTOS</p>
                        <Col sm={12} lg={6}>
                            <img src={moon} alt="carbon" />
                            <p><small>Lorem ipsum dolor sit amet consectetur</small></p>

                        </Col>
                        <Col sm={12} lg={6}>

                            <img src={fire} alt="carbon" />
                            <p><small>Lorem ipsum dolor sit amet consectetur</small></p>

                        </Col>
                        <Col sm={12} lg={6}>

                            <img src={thunder} alt="carbon" />
                            <p><small>Lorem ipsum dolor sit amet consectetur</small></p>

                        </Col>
                        <Col sm={12} lg={6}>

                            <img src={carbon} alt="carbon" />
                            <p><small>Lorem ipsum dolor sit amet consectetur</small></p>

                        </Col>
                    </Row>
                </Col>
                <Col lg={4}>
                    <div>
                        <hr className='border border-black opacity-100' />
                        <p className='fs-6 fw-bold text-black pt-0'>AFRICA</p>
                        <img src={arms} alt="arms" />
                        <h5 className='text-link py-2'>Well-known Ukrainian pilot ‘Juice’ among 3 dead in plane crash</h5>
                    </div>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                </Col>
                <Col lg={4}>
                    <div>
                        <hr className='border border-black opacity-100' />
                        <p className='fs-6 fw-bold text-black pt-0'>EUROPE</p>
                        <img src={arms} alt="arms" />
                        <h5 className='text-link py-2'>Well-known Ukrainian pilot ‘Juice’ among 3 dead in plane crash</h5>
                    </div>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                </Col>
                <Col lg={4}>
                    <div>
                        <hr className='border border-black opacity-100' />
                        <p className='fs-6 fw-bold text-black pt-0'>EUROPE</p>
                        <img src={arms} alt="arms" />
                        <h5 className='text-link py-2'>Well-known Ukrainian pilot ‘Juice’ among 3 dead in plane crash</h5>
                    </div>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                    <hr className='border border-black opacity-25' />
                    <p className='text-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam quibusdam dolorum quas eum.</p>
                </Col>
            </Row>

        </>
    );
};

export default AroundTheWorld;
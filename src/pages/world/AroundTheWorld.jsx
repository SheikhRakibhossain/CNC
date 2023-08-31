import React from 'react';
import { Col, Row } from 'react-bootstrap';
import arms from '../../assets/world/arms.jpg'

const AroundTheWorld = () => {
    return (
        <>
            <h2 className='pt-4 mt-4 fw-bold fs-3 text-black'>Around the world</h2>
            <Row>
                <Col lg={4}>
                    <div>
                        <hr className='border border-black opacity-100'/>
                        <p className='fs-6 fw-bold text-black pt-0'>EUROPE</p>
                        <img src={arms} alt="arms" />
                        <h5 className='text-link py-2'>Well-known Ukrainian pilot ‘Juice’ among 3 dead in plane crash</h5>
                    </div>
                </Col>
                <Col lg={4}>


                </Col>
                <Col lg={4}>


                </Col>

            </Row>

        </>
    );
};

export default AroundTheWorld;
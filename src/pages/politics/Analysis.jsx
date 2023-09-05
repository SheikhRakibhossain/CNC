import React from 'react';
import { Col, Row } from 'react-bootstrap';
import trumpVote from '../../assets/politics/trum2.jpg';
import talkShow from '../../assets/politics/talkshow.jpg';
import gop from '../../assets/politics/gop.png';
import kenneth from '../../assets/politics/kenneth.jpg';
import nevada from '../../assets/politics/nevadda.jpg';
import trump2 from '../../assets/politics/trump2.jpg';

const Analysis = () => {
    return (
        <>

            <h1 className='pt-5'>CNN Analysis</h1>
            <hr className="border border-dark " />
            <Row>
                <Col lg={6}>
                    <p>WHAT MATTERS</p>
                    <img src={talkShow} alt="talking fight each with other" />
                    <p className='fs-5 fw-bold pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt voluptatibus quod dignissimos enim iure obcaecati. Consequuntur dolores rerum consequatur.</p>
                </Col>
                <Col lg={6}>
                    <p>FAULT LINES</p>
                    <img src={trumpVote} alt="talking fight each with other" />
                    <p className='fs-5 fw-bold pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt voluptatibus quod dignissimos enim iure obcaecati. Consequuntur dolores rerum consequatur.</p>
                </Col>
            </Row>
            {/* 3 section for political page */}

            <Row>
            <h1 className='pt-5'>FACTS FIRST</h1>
            <hr className="border border-dark " />
                <Col lg={3}>
                <img src={gop} alt="Card images" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat.</p>
                
                </Col>
                <Col lg={3}>
                <img src={kenneth} alt="Card images" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat.</p>
                
                </Col>
                <Col lg={3}>
                <img src={nevada} alt="Card images" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat.</p>
                
                </Col>
                <Col lg={3}>
                <img src={trump2} alt="Card images" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat.</p>
                
                </Col>

            </Row>

        </>
    );
};

export default Analysis;
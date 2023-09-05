import React from 'react';
import { Col, Row } from 'react-bootstrap';
import trumpVote from '../../assets/politics/trum2.jpg';
import talkShow from '../../assets/politics/talkshow.jpg';

const Analysis = () => {
    return (
        <>

            <h1 className='pt-5'>CNN Analysis</h1>
            <hr className="border border-dark " />
            <Row>
                <Col lg={6}>
                        <img src={talkShow} alt="talking fight each with other" />
                        <p className='fs-5 fw-bold pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt voluptatibus quod dignissimos enim iure obcaecati. Consequuntur dolores rerum consequatur.</p>
                </Col>
                <Col lg={6}>
                        <img src={trumpVote} alt="talking fight each with other" />
                        <p className='fs-5 fw-bold pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt voluptatibus quod dignissimos enim iure obcaecati. Consequuntur dolores rerum consequatur.</p>
                </Col>
            </Row>

        </>
    );
};

export default Analysis;
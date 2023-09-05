import React from 'react';
import { Col, Row } from 'react-bootstrap';
import media1 from '../../assets/politics/media1.jpg';
import media2 from '../../assets/politics/media2.jpg';
import media3 from '../../assets/politics/media3.jpg';
import media4 from '../../assets/politics/media4.jpg';

const Media = () => {
    return (
        <>

            <h1 className='pt-5'>CNN Analysis</h1>
            <hr className="border border-dark " />

            <Row>
                <Col lg={3}>
                <img src={media1} alt="talking fight each with other" />
                    <p className='fs-5 fw-bold pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt voluptatibus quod dignissimos enim iure obcaecati. Consequuntur dolores rerum consequatur.</p>
                </Col>
            </Row>

        </>
    );
};

export default Media;
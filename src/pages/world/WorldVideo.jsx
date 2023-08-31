import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player'


const WorldVideo = () => {
    return (
        <>
            <h2 className='py-4'>Video</h2>
            <Row xs={2} md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <ReactPlayer  width='100%'
          height='100%' url='https://youtu.be/-42K44A1oMA?si=GOokONYx4cYTpy7X' />
                            <Card.Body>
                                <Card.Title>MERN Stack Project</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </>
    );
};

export default WorldVideo;
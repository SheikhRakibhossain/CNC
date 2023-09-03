import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import longFrom1 from '../../assets/sports/longform1.jpg';


const Longform = () => {
    return (
        <>
            <Container className='py-5'>
                <h1>World Golfs </h1>
                <hr className="border border-dark " />
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card className='border-0 rounded-0'>
                                <Card.Img variant="top" src={longFrom1} className='rounded-0' />
                                <Card.Body>
                                    <Card.Title>‘Our dreams never came true.’ These men helped build Qatar’s World Cup, now they are struggling to survive</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>

        </>
    );
};

export default Longform;
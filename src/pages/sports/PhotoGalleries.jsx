import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Gallery1 from '../../assets/sports/gallery1.jpg';
// import Gallery2 from '../../assets/sports/gallery2.jpg';


const PhotoGalleries = () => {
    return (
        <>
        <Container className='py-5'>
            <h1>Photo Galleries </h1>
            <hr className="border border-dark " />
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='border-0 rounded-0'>
                            <Card.Img variant="top" src={Gallery1} className='rounded-0' />
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

export default PhotoGalleries;
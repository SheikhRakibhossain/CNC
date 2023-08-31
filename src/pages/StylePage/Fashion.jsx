import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import fashion from '../../assets/girlscat/fashionGirl.webp'
import Container from 'react-bootstrap/esm/Container';

const Fashion = () => {


    return (
        <>
            <Container>
                <h1 className=''>Arts</h1>
                <hr className="border border-dark border-1 opacity-75" />
                <Row xs={1} md={2} lg={4} className="g-4 py-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={fashion} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
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
            </Container>
        </>
    );
};

export default Fashion;
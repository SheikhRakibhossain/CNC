import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import aicar from '../../assets/girlscat/aicar.jpg'

const Us = () => {
    return (
        <Container>
            <Card className="bg-dark text-white text-center">
                <Card.Img src={aicar} alt="car" />
                <Card.ImgOverlay>
                    
                    <Card.Title className='fs-2'>Card title</Card.Title>
                    <Card.Text className='fs-4'>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant='warning'>Let's Share</Button>
               
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default Us;
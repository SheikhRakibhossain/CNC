import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import usVideo1 from '../../assets/us/usv1.jpg';
import usVideo2 from '../../assets/us/usv2.png';
import usVideo3 from '../../assets/us/usv3.png';
import usVideo4 from '../../assets/us/usv4.jpg';

const USVideo = () => {
    return (
        <Container>
            <h1>Profiles</h1>
            <hr className="border border-dark " />
            <CardGroup className='gap-3 py-4'>
                <Card className='border'>
                    <Card.Img variant="top" src={usVideo1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border'>
                    <Card.Img variant="top" src={usVideo2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border'>
                    <Card.Img variant="top" src={usVideo3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border'>
                    <Card.Img variant="top" src={usVideo4} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        </Container>
    );
};

export default USVideo;
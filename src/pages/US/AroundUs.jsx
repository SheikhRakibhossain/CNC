import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import uv1 from '../../assets/us/uv1.jpg';
import uv2 from '../../assets/us/uv2.jpg';
import uv3 from '../../assets/us/uv3.jpg';
import uv4 from '../../assets/us/uv4.png';
import uv5 from '../../assets/us/uv5.jpg';
import uv6 from '../../assets/us/uv6.jpg';
import uv7 from '../../assets/us/uv7.jpg';
import uv8 from '../../assets/us/uv8.jpg';
import uv9 from '../../assets/us/uv9.jpg';
import uv10 from '../../assets/us/uv10.jpg';
import uv11 from '../../assets/us/uv11.jpg';
import uv12 from '../../assets/us/uv12.jpg';

const AroundUs = () => {
    return (
        <>
            <h1>Around the US</h1>
            <hr className="border border-dark " />
            <CardGroup className='gap-3 py-4'>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv1} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv2} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv3} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv4} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </CardGroup>
            <CardGroup className='gap-3 py-4'>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv5} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv6} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv7} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv8} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </CardGroup>
            <CardGroup className='gap-3 py-4 ' lg={4} md={2}>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv9} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv10} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv11} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={uv12} />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </CardGroup>

        </>
    );
};

export default AroundUs;
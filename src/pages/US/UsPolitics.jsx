import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import usPolitics from '../../assets/us/uspolitics.jpg';
// import usBusiness from '../../assets/us/usbusiness.jpg';

const UsPolitics = () => {
    return (

        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col key={idx}>
            <Card className='border-0'>
              <Card.Img variant="top" src={usPolitics} />
              <Card.Body>
                <Card.Title>The political crime has been release from usa.</Card.Title>
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
    );
};

export default UsPolitics;
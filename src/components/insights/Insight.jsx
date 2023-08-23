import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Insight = ({insight}) => {
    return (
          <Col >
            <Card style={{ height: '450px' }}>
              <Card.Img variant="top" src={insight.image} />
              <Card.Body>
                <Card.Title>{insight.title}</Card.Title>
                <Card.Text>
                  {insight.detail}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      
    );
};

export default Insight;
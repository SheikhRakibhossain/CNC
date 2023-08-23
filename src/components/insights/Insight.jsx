import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaCalendar } from 'react-icons/fa';
import moment from 'moment';


const Insight = ({insight}) => {
    return (
          <Col >
            <Card style={{ height: '470px' }}>
              <Card.Img variant="top" src={insight.image} />
              <Card.Body>
                <Card.Title>{insight.title}</Card.Title>
                <Card.Text>
                  {insight.detail}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted"><span className='text-dark'><FaCalendar/>  {moment(insight?.date).format('MMM, Do YYYY')}</span> </Card.Footer>
            </Card>
          </Col>
      
    );
};

export default Insight;
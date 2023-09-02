import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import profile1 from '../../assets/sports/profile1.jpg';
import profile2 from '../../assets/sports/profile2.jpg';
import profile3 from '../../assets/sports/profile3.jpg';
import profile4 from '../../assets/sports/profile4.jpg';
// import womenCup5 from '../../assets/sports/womenCup-4.jpg';

const Profiles = () => {
    return (
        <>
            <h2>I am profile pages.</h2>
            <Container>
            
        <h1>Women's World Cup in depth</h1>
        <hr className="border border-dark " />
        <CardGroup className='gap-3 py-4'>
      <Card >
        <Card.Img variant="top" src={profile1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={profile2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={profile3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={profile4} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

        </Container>
        </>
    );
};

export default Profiles;
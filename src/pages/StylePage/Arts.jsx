import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import museum from '../../assets/girlscat/mesueam.webp';
import business from '../../assets/girlscat/bigBusiness.webp';
import singer from '../../assets/girlscat/southAfricanSinger.webp';

const Arts = () => {
    return (
        <>
            <Container className='py-4'>
                <h1 className=''>Arts</h1>
                <hr className="border border-dark border-1 opacity-75" />
              <Row>
                <Col lg={5}>
                    <img src={museum} alt="museum" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est saepe temporibus vero amet nihil corrupti quo ratione perferendis sapiente aperiam, suscipit asperiores accusamus. Nam!</p>
                </Col>
                <Col lg={5}>
                    <img src={business} alt="museum" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est saepe temporibus vero amet nihil corrupti quo ratione perferendis sapiente aperiam, suscipit asperiores accusamus. Nam!</p>
                </Col>
                <Col lg={2}>
                    <img src={singer} alt="museum" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi tempore deleniti molestiae est in mollitia commodi? Autem placeat, adipisci magnam soluta perspiciatis facere sed nesciunt praesentium? Officiis voluptatum eligendi praesentium provident asperiores ullam sit.</p>
                </Col>
               
             </Row>

            </Container>
        </>
    );
};

export default Arts;
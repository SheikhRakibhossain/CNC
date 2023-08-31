import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import design1 from '../../assets/girlscat/design1.jpg';
import design2 from '../../assets/girlscat/design2.jpg';

const Design = () => {
    return (
        <Container>
            <h1 className=''>Design</h1>
            <hr className="border border-dark border-1 opacity-75" />
            <Row>
                    <Col lg={5}>
                        <img src={design1} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est saepe temporibus vero amet nihil corrupti quo ratione perferendis sapiente aperiam, suscipit asperiores accusamus. Nam!</p>
                        <hr className="border opacity-50" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>
                        <hr className="border opacity-50 " />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>
                    </Col>
                    <Col lg={5}>
                        <img src={design2} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est saepe temporibus vero amet nihil corrupti quo ratione perferendis sapiente aperiam, suscipit asperiores accusamus. Nam!</p>
                        <hr className="border opacity-50" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>
                        <hr className="border opacity-50 " />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non quia eius repudiandae maxime quidem!</p>
                    </Col>
                    </Row>
        </Container>
    );
};

export default Design;
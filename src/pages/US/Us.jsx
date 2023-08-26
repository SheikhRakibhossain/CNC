import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import aicar from '../../assets/girlscat/aicar.jpg'

const Us = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={aicar} alt="car" />
                </Col>
            </Row>
        </Container>
    );
};

export default Us;
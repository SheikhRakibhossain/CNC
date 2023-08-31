import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import oman from '../../assets/girlscat/oman.webp'
import criss from '../../assets/girlscat/criss.jpg'
import newCIty from '../../assets/girlscat/newcity.jpg'
import oldCity from '../../assets/girlscat/oldcity.jpg'
import waterFall from '../../assets/girlscat/waterFall.jpg'
import threeD from '../../assets/girlscat/3d.jpg';
import bothChild from '../../assets/girlscat/bothChild.jpg';

const Architecture = () => {
    return (
        <Container className='py-4'>

            <h1>Architecture</h1>
            <hr className="border border-dark " />
            <Row>
                <Col lg={5}>
                    <div>
                        <img src={oldCity} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est </p>
                    </div>
                    <div>
                        <img src={newCIty} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est </p>
                    </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <img src={oman} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus </p>

                    </div>
                    <div>
                        <img src={bothChild} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, deleniti at maxime possimus rerum est</p>
                       

                    </div>
                </Col>
                <Col lg={2}>
                    <div>
                        <img src={criss} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi </p>
                    </div>
                    <div>
                        <img src={threeD} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi tempore </p>
                    </div>
                    <div>
                        <img src={waterFall} alt="museum" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi tempore deleniti molestiae</p>
                    </div>
                </Col>

            </Row>

        </Container>
    );
};

export default Architecture;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style1 from '../../assets/girlscat/style.jpg'
import style2 from '../../assets/girlscat/style2.jpg'
import style3 from '../../assets/girlscat/style3.jpg'
import { Container } from 'react-bootstrap';

const StyleSlider = () => {
    return (
        <Container fluid>
            <Carousel>
                <Carousel.Item>
                    <img src={style2} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={style1} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={style3} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default StyleSlider;
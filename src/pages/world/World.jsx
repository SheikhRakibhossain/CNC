import React from 'react';
import { Container } from 'react-bootstrap';
import WorldHero from './WorldHero';
import './World.css'
import WorldVideo from './WorldVideo';
import AroundTheWorld from './AroundTheWorld';
import Extra from './Extra';

const World = () => {
    return (
        <>
            <Container className='py-5'>
                <WorldHero />
                <WorldVideo/>
                <AroundTheWorld/>
                <Extra/>
            </Container>

        </>
    );
};

export default World;
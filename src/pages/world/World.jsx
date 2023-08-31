import React from 'react';
import { Container } from 'react-bootstrap';
import WorldHero from './WorldHero';
import './World.css'
import WorldVideo from './WorldVideo';
import AroundTheWorld from './AroundTheWorld';

const World = () => {
    return (
        <>
            <Container className='py-5'>
                <WorldHero />
                <WorldVideo/>
                <AroundTheWorld/>
            </Container>

        </>
    );
};

export default World;
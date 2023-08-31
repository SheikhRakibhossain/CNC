import React from 'react';
import { Container } from 'react-bootstrap';
import WorldHero from './WorldHero';
import './World.css'

const World = () => {
    return (
        <>
            <Container className='py-5'>
                <WorldHero />
            </Container>

        </>
    );
};

export default World;
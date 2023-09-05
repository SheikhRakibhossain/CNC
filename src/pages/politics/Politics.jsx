import React from 'react';
import { Container } from 'react-bootstrap';
import PHero from './PHero';
import Analysis from './Analysis';
import MPNews from './MPNews';
import Media from './Media';

const Politics = () => {
    return (
        <>
        <Container className='py-5'>
            <PHero/>
            <Analysis/>
            <MPNews/>
            <Media/>

        </Container>
            
        </>
    );
};

export default Politics;
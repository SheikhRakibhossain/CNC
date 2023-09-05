import React from 'react';
import { Container } from 'react-bootstrap';
import PHero from './PHero';
import Analysis from './Analysis';
import MPNews from './MPNews';

const Politics = () => {
    return (
        <>
        <Container className='py-5'>
            <PHero/>
            <Analysis/>
            <MPNews/>

        </Container>
            
        </>
    );
};

export default Politics;
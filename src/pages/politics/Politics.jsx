import React from 'react';
import { Container } from 'react-bootstrap';
import PHero from './PHero';
import Analysis from './Analysis';

const Politics = () => {
    return (
        <>
        <Container className='py-5'>
            <PHero/>
            <Analysis/>


        </Container>
            
        </>
    );
};

export default Politics;
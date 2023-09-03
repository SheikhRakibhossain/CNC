import React from 'react';
import "./us.css"
import UsPost from './UsPost';
import UsHeroSEction from './UsHeroSEction';
import OnlyUs from './OnlyUs';
import USVideo from './USVideo';
import UsPolitics from './usPolitics';
import { Container } from 'react-bootstrap';
import AroundUs from './AroundUs';

const Us = () => {
    return (
        <>


            <Container>
                <UsHeroSEction />
                <UsPost />
                <OnlyUs />
                <USVideo />
                <UsPolitics />
                <AroundUs/>
            </Container>



        </>
    );
};

export default Us;
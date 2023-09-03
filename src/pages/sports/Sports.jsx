import React from 'react';
import SportsHero from './SportsHero';
import WomensWorld from './WomensWorld';
import Profiles from './Profiles';
import Golf from './Golf';
import Football from './Football';

const Sports = () => {
    return (
        <>
            <SportsHero />
            <WomensWorld/>
            <Profiles/>
            <Golf/>
            <Football/>
        </>
    );
};

export default Sports;
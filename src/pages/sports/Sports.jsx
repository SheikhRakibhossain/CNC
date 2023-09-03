import React from 'react';
import SportsHero from './SportsHero';
import WomensWorld from './WomensWorld';
import Profiles from './Profiles';
import Golf from './Golf';
import Football from './Football';
import Tennis from './Tennis';
import USSports from './USSports';
import Longform from './Longform';

const Sports = () => {
    return (
        <>
            <SportsHero />
            <WomensWorld/>
            <Profiles/>
            <Golf/>
            <Football/>
            <Tennis/>
            <USSports/>
            <Longform/>
        </>
    );
};

export default Sports;
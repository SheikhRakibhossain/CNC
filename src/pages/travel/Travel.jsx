import React from 'react';
import TravelHero from './TravelHero';
import TravelCard from './TravelCard';
import TravelMap from './TravelMap';
import NewsLetter from './NewsLetter';

const Travel = () => {
    return (
        <>
            <TravelHero/>
            <TravelCard/>
            <TravelMap/>
            <NewsLetter/>
        </>
    );
};

export default Travel;
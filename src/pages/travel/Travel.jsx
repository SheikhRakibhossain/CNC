import React from 'react';
import TravelHero from './TravelHero';
import TravelCard from './TravelCard';
import TravelMap from './TravelMap';
import NewsLetter from './NewsLetter';
import AnimalTravel from './AnimalTravel';

const Travel = () => {
    return (
        <>
            <TravelHero/>
            <TravelCard/>
            <TravelMap/>
            <NewsLetter/>
            <AnimalTravel/>
        </>
    );
};

export default Travel;
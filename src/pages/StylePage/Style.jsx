import React from 'react';
import StyleSlider from './StyleSlider';
import LatestStyle from './LatestStyle';
import Arts from './Arts';
import Architecture from './Architecture';
import Fashion from './Fashion';
import Design from './Design';

const Style = () => {
    return (
        <>
            <StyleSlider />
            <LatestStyle />
            <Arts />
            <Architecture/>
            <Fashion/>
            <Design/>

        </>
    );
};

export default Style;
import React from 'react';
import StyleSlider from './StyleSlider';
import LatestStyle from './LatestStyle';
import Arts from './Arts';
import Architecture from './Architecture';
import Fashion from './Fashion';

const Style = () => {
    return (
        <>
            <StyleSlider />
            <LatestStyle />
            <Arts />
            <Architecture/>
            <Fashion/>

        </>
    );
};

export default Style;
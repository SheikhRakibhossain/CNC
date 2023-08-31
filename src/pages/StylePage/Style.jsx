import React from 'react';
import StyleSlider from './StyleSlider';
import LatestStyle from './LatestStyle';
import Arts from './Arts';
import Architecture from './Architecture';
import Fashion from './Fashion';
import Design from './Design';
import MosheSafedi from './MosheSafedi';

const Style = () => {
    return (
        <>
            <StyleSlider />
            <LatestStyle />
            <Arts />
            <Architecture/>
            <Fashion/>
            <Design/>
            <MosheSafedi/>

        </>
    );
};

export default Style;
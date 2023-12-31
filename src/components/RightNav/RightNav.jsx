import React from 'react';
import QZone from '../QZone/QZone';
import NewsPaper from '../newsPaper/NewsPaper';

const RightNav = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='border-bottom border-1 border-dark py-2 mb-4'>Show Queen Zone</h3>
            
            <QZone/>
            <NewsPaper/>
        </div>
    );
};

export default RightNav;
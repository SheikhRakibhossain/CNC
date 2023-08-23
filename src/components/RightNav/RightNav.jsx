import React from 'react';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div className='container mx-auto'>
            <h3>Show Queen Zone</h3>
            <hr className='text-danger fw-' />
            <QZone/>
        </div>
    );
};

export default RightNav;
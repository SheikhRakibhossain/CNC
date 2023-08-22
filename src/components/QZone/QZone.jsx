import React from 'react';
import Qzone1 from '../../assets/qZone1.png';
import Qzone2 from '../../assets/qZone2.png';
import Qzone3 from '../../assets/qZone3.png';

const QZone = () => {
    return (
        <div gap={6} className='bg-black text-center py-5 px-4'>
            <img className='my-4' src={Qzone1} alt="picture" />
            <img className='my-4' src={Qzone2} alt="picture" />
            <img className='my-4' src={Qzone3} alt="picture" />
        </div>
    );
};

export default QZone;
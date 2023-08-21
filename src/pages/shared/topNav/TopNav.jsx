import React from 'react';
import { Image } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const TopNav = () => {
    return (
        <>
            <div>
                <Image src="/src/assets/top heading.png" fluid />
            </div>
            <div className='py-4'>
                 <Marquee>
                    <h4 className='fs-4 mx-5'> "Zelensky warns Russia's neighbors under threat 'if Ukraine does not prevail"</h4>
                    <h4 className='fs-4 mx-4'> "Hilary moves through US Southwest with ‘historic amount of rainfall !"</h4>
                    <h4 className='fs-4 mx-4'> "TV chef says he’s closing his Michelin-starred restaurant for ‘better work/life balance’ "</h4>
                </Marquee>
            </div>

        </>
    );
};

export default TopNav;
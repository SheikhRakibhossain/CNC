import React from 'react';
import { Image } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const TopNav = () => {
    return (
        <>
            <div>
                <Image src="/src/assets/top heading.png" fluid />
            </div>
            <div className='d-lg-flex py-2 justify-content-center align-items-center'>
                <button className='d-sm-block  px-3 ms-3 me-1 fs-5 btn btn-warning w-12%' style={{padding:'2px 2px'}}>Top News</button>
                 <Marquee className='fst-italic fs-5 me-2' speed={100}>
                    <h4 className='mx-5'> "Zelensky warns Russia's neighbors under threat 'if Ukraine does not prevail"</h4>
                    <h4 className='mx-4'> "Hilary moves through US Southwest with ‘historic amount of rainfall !"</h4>
                    <h4 className='mx-4'> "TV chef says he’s closing his Michelin-starred restaurant for ‘better work/life balance’ "</h4>
                    <h4 className='mx-4'> "Hilary moves through US Southwest with ‘historic amount of rainfall !"</h4>
                </Marquee>
            </div>

        </>
    );
};

export default TopNav;
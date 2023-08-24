import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Insight from './Insight';

const Insights = () => {

    const [insights, setInsights] = useState([]);
    useEffect(() => {

        fetch('https://cnc-server.vercel.app/insights')
            .then(res => res.json())
            .then(data => setInsights(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        <h3 className='py-4'> <span className='border-bottom border-2 border-dark py-2'>Editor Publication's Choice</span></h3>
        <Row  xs={1} md={2} lg={4} className="g-5">

            {
                insights.map(insight => <Insight
                    key={insight.id} 
                    insight={insight}
                    ></Insight>)
            }
            </Row>
        </>
    );
};

export default Insights;
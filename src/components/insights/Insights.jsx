import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Insight from './Insight';

const Insights = () => {

    const [insights, setInsights] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/insights')
            .then(res => res.json())
            .then(data => setInsights(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        <h3>Editor Publication</h3>
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
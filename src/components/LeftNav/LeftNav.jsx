import React, { useEffect, useState } from 'react';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

    }, [])
    return (
        <div>
            <h3>I am left nav</h3>
        </div>
    );
};

export default LeftNav;
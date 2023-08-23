import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))

    }, [])
    return (
        <>
            <h3>All Category</h3>
            {
                categories.map(category => <div
                key={category.id} className='border-bottom border-dark'>
                <Link to={`/category/${category.id}`} className='fw-semibold link-dark link-offset-2 link-opacity-75-hover d-block py-3 px-1' >{category.name}</Link>
                </div>)
            }
            
        </>
    );
};

export default LeftNav;
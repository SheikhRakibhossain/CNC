import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    
    return (
        <div>
            
                I am form category: {id}
            
        </div>
    );
};

export default Category;
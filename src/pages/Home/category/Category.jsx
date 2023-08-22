import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const Category = () => {

    const { id } = useParams();
    const newsCategory = useLoaderData()
    return (
        <div  className='my-3'>

            {
                newsCategory.map( news =><NewsCard
                key={news._id}
                news ={news}
                ></NewsCard>)

            }

        </div>
    );
};

export default Category;
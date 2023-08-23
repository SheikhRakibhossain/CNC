import React, { useEffect, useState } from 'react';
import Editor from './editor';

const Editors = () => {

    const [editors, setEditors] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/editor')
        .then(res => res.json())
        .then(data =>setEditors(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h3 className='py-4'> <span className='border-bottom border-2 border-dark py-2'>Top Insight News</span></h3>
            {
                editors.map( editor =><Editor
                key={editor.id}
                editor ={editor}
                ></Editor>)
            }
        </>
    );
};

export default Editors;
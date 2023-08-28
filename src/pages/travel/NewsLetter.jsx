import React from 'react';

const NewsLetter = () => {
    return (
        <>
            <section className=' container bg-warning py-5'>
                <h1 className='text-center'>Stay Tune With Us</h1>
                <p className='text-center text-danger fst-italic'>Know our latest news and update. Write your email and get a membership from us to continue your vision using CNC.</p>

                <form className='d-flex justify-content-center align-items-center '>
                    <input type="email" placeholder='Write email' class="form-control py-2 w-75" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <button type="submit" class="btn btn-outline-success btn-sm" style={{ padding: '9px 3px' }}>Subscribe</button>

                </form>

            </section>

        </>
    );
};
export default NewsLetter;
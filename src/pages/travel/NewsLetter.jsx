import React from 'react';

const NewsLetter = () => {
    return (
        <section className=' container bg-warning py-5'>


            <form className='d-flex justify-content-center align-items-center '>
                <input type="email" placeholder='Write email' class="form-control py-2 w-75" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <button type="submit" class="btn btn-outline-success btn-sm" style={{ padding: '9px 3px' }}>Subscribe</button>

            </form>

        </section>
    );
};
export default NewsLetter;
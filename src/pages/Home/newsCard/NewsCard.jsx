import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating'


const NewsCard = ({ news }) => {

    // var Rating = require('react-rating');
    const { _id, title, image_url, details, author, total_view, rating } = news;

    return (
        <>
            <Card className='my-4 pe-auto'>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center' style={{ border: '1px' }}>
                        <div className='d-flex justify-content-center mt-2'>
                            <Image src={author?.img} roundedCircle style={{ height: '40px' }} />
                            <div className='ms-4'>
                                <p className='fs-6 fw-normal mb-2'>{author?.name}</p>
                                <p className='fs-6 fw-normal '>{moment(author?.published_date).format('MMM, Do YYYY, h:mm:ss a')}</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <Link to={'/news'} className='fs-4'><FaShareAlt /></Link>
                            <Link to={'/category'} className='fs-4'><FaBookmark /></Link>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt='post_image' className='py-2' />
                    <Card.Text className='fs-6 fw-normal py-2'>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`} className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>read more</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted fs-5 d-flex align-items-center">
                    <div className='flex-grow-1'> <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar className='text-warning'/>}
                        fullSymbol={<FaStar/>}
                    /> <span className='fs-6 fw-normal'>{rating?.number}</span> </div>
                    <div ><span className='fs-6 fw-normal'><span> <FaEye /> </span> {total_view} Views</span></div>
                </Card.Footer>
            </Card>
        </>
    );
};

export default NewsCard;
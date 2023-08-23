import React from 'react';
import newsPaperImage from '../../assets/bg1.png'
import { Button, Card} from 'react-bootstrap';




const NewsPaper = () => {
    return (
        <Card className="bg-dark text-white  my-5">
            <Card.Img src={newsPaperImage} alt="news paper image" />
            <Card.ImgOverlay className='d-flex justify-content-center align-items-center text-center'>
                <Card.Text>
                <Card.Title className='fs-1 fw-bold'>Create an Amazing Newspaper</Card.Title>
               <p className='fs-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p> 
                <Button className='btn-warning btn-sm'>Learn More</Button>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default NewsPaper;
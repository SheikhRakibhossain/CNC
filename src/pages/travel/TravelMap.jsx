import React from 'react';
// import GoogleMapReact from 'google-map-react';
import { Col, Container, Row } from 'react-bootstrap';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;


const TravelMap = () => {
    // const defaultProps = {
    //     center: {
    //         lat: 10.99835602,
    //         lng: 77.01502627
    //     },
    //     zoom: 11
    // };
    return (
        <>
            <Container >
                <div>
                    <h2 className='text-center fs-3 text-uppercase fst-italic'>Let's Choose your dream destination</h2>
                    <hr className="border border-danger border-2 "></hr>

                </div>
                <div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29187.39471443563!2d90.35074077431638!3d23.874567100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1suttara%20azampur%20kacha%20bazar!5e0!3m2!1sen!2sbd!4v1693221897578!5m2!1sen!2sbd" style={{ border: '0', width: '84vw', height: '60vh', }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* <div>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "3cba09ec9a157c51" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>

                </div> */}
               
                    
            </Container>


        </>
    );
};

export default TravelMap;
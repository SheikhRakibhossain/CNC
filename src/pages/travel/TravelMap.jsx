import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const TravelMap = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
        <>
            <section>
                <div>
                    <h2 className='text-center fs-3 text-uppercase fst-italic'>Let's Choose your dream destination</h2>
                    <hr className="border border-danger border-2 "></hr>

                </div>
                <div>
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
                </div>
            </section>


        </>
    );
};

export default TravelMap;
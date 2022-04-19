import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';

import banner1 from '../../../images/banner-1.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='h1 font-weight-bold'>WELCOME TO RAGIB PHOTOGRAPHY</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className='h1 font-weight-bold'>BEST PHOTOGRAPHER IN THE TOWN</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className='h1 font-weight-bold'>CHOOSE YOUR FAVORITE PACKAGE</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
};

export default Banner;
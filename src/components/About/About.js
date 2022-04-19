import React from 'react';
import './About.css'
import aboutImage from '../../images/about.jpeg';

const About = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className='d-flex justify-content-center align-items-center'>
                <div className="col-md-7 ">
                    <h1 className='title'><span className='title-span'>Ragib</span> Photography</h1>
                    <p className='about-details pe-5'>My greatest goal as a photographer is to photograph who I want, where I want, when I want. Ultimately this means that in order to achieve that goal, I must get into an independently wealthy point in my life, which is funny because wealth is relative. The more you make, the more you spend is the mantra, when it comes to most successful photographers that I’ve known throughout my life. It’s my belief that getting out of the hamster wheel is a photographer’s biggest challenge.</p>
                </div>
                <div className="col-md-5">
                    <img className='img-fluid' src={aboutImage} alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;
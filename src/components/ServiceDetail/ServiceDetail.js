import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='container'>
           <h2 className='text-center text-success mt-5'>Thank you Choosing this package!</h2>
           <h2 className='text-center text-success mb-5'> Your chosen package id: {serviceId}</h2>
           <div className='text-center'>
           <Link to='/checkout'>
                <button className='btn btn-primary'> Proceed Checkout</button>   
            </Link> 
           </div>
        </div>
    );
};

export default ServiceDetail;
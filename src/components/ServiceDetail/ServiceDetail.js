import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
           <h2>service detail page: {serviceId}</h2> 
        </div>
    );
};

export default ServiceDetail;
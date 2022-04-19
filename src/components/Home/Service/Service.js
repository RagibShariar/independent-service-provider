import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, name, price, img, noOfPics, desc } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <Container>
            
            
                    <Card className='mb-3' >
                    <Card.Img variant="" src={img} />
                    <Card.Body>
                        <Card.Title style={{fontSize:"25px"}}>{name}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                            <h5>Number of Pictures: {noOfPics}</h5>
                            <h2>${price}</h2>
                        <Button onClick={()=> navigateToServiceDetail(id)} variant="primary">Buy Now</Button>
                    </Card.Body>
                    </Card>
                    
        </Container>
    );
};

export default Service;
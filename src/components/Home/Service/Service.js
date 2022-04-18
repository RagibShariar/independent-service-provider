import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, name, price, img, noOfPics } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <Container>
            
            
                    <Card className='mb-3' >
                    <Card.Img variant="" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                            <h5>Number of Pictures: {noOfPics}</h5>
                            <h1>${price}</h1>
                        <Button onClick={()=> navigateToServiceDetail(id)} variant="primary">Buy Now</Button>
                    </Card.Body>
                    </Card>
                    
        </Container>
    );
};

export default Service;
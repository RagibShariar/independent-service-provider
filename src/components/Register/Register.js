import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate =useNavigate();
    const navigateLogin = ()=>{
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        console.log(name, email, pass);
    }
    return (
        <div className='container '>
            <h2 className='text-center m-5'>Sign Up Now</h2>
            <Form onSubmit={handleRegister} className='border p-3 rounded-3 my-5 w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            <small >Already have an account? <span onClick={navigateLogin} className='text-primary'>Please login</span></small>
            </Form>
        </div>
    );
};

export default Register;
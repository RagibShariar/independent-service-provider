import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate =useNavigate();
    const navigateLogin = ()=>{
        navigate('/login');
    }

    if (user){
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container '>
            <h2 className='text-center m-5'>Sign Up Now</h2>
            <Form onSubmit={handleRegister} className='border p-3 rounded-3 my-5 w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button className='register-btn w-100 mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            <small >Already have an account? <span onClick={navigateLogin} className='text-primary'>Please login</span></small>
            </Form>
        </div>
    );
};

export default Register;
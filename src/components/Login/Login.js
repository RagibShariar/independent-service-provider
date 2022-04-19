import { Button, Form } from 'react-bootstrap';
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        // console.log(email, pass);
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event =>{
        navigate('/register')
    }

    return (
        <div className='container  mx-auto'>
            <h2 className='text-center m-5'>Please login</h2>
            <Form onSubmit={handleSubmit} className=' mx-auto border p-3 rounded-3 my-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            <small >New to Ragib's Photography? <span className='text-primary' onClick={navigateRegister}>Register Now</span></small>
            </Form>
        </div>
    );
};

export default Login;
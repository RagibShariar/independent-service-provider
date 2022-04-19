import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google-logo.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
            errorElement = <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div className='text-center'>
            <div className='d-flex align-items-center mb-3 justify-content-center'>
                <div style={{ height: '1px', width: '130px' }} className='bg-dark'></div>
                <p className='mt-2 px-3 '>or</p>
                <div style={{ height: '1px', width: '130px' }} className='bg-dark'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary px-5 d-block mx-auto'>
                    <img style={{ width: '25px' }} src={google} alt="" />
                    <span className='ms-3'>Sign In with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
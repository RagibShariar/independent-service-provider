import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className=' text-center'>
            <p>Copyright &copy; {year}. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
import Logo from '../../logo.png';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] =useAuthState(auth);
  const handleSignout = () =>{
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" variant="light">
  <Container>
  <Navbar.Brand as={Link} to ="/">
    <img className='logo' src={Logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="ms-auto">

      <Nav.Link as={Link} to ="/">Home</Nav.Link>
      <Nav.Link as={Link} to ="about">About</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      {/* <Nav.Link as={Link} to ="services">Services</Nav.Link> */}
      <Nav.Link as={Link} to ="blogs">Blogs</Nav.Link>
      
      { 
        user ? <button onClick={handleSignout} className='btn btn-danger ms-3 text-light'>Sign out</button> 
        :
        <Nav.Link className='btn btn-primary px-4 ms-3 text-light' as={Link} to ="login">Login</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
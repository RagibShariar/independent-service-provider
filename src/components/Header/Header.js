import Logo from '../../logo.png';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
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
      <Nav.Link as={Link} to ="login">Login</Nav.Link>
      <Nav.Link as={Link} to ="register">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
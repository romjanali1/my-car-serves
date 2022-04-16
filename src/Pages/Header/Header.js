import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mylogo from '../../photos/logo2.png';

const Header = () => {
    return (
        <div>
    <Navbar variant="light">
    <Container>
    <Navbar.Brand as={Link} to="/">
      <img
        src={mylogo}
        className="w-25"
        alt=""
      />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/SignUp" className='rounded-pill bg-danger text-white px-4'>Sing up</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;
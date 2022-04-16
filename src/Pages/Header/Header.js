import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import mylogo from '../../photos/logo2.png';

const Header = () => {
    return (
        <div>
    <Navbar variant="light">
    <Container>
    <Navbar.Brand href="#home">
      <img
        src={mylogo}
        className="w-25"
        alt=""
      />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/sing up" className='rounded-pill bg-danger text-white px-4'>Sing up</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;
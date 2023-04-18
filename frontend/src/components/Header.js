import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/cart'>
                <i className='fa-solid fa-cart-shopping'></i> Cart
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                <i className='fa-solid fa-user'></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

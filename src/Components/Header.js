import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = props => {
  const handleLogout = () => {
    localStorage.removeItem('credentials');
    props.setIsLoggedIn(false);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MOCHI LAND</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={props.isLoggedIn ? '/admin' : '/login'}>
                <Nav.Link>
                  <i className="fa-solid fa-user"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login" onClick={handleLogout}>
                <Nav.Link>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fa-solid fa-cart-shopping"></i> Cart (
                  {props.itemCount})
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

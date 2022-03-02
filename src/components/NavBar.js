import React from 'react'
import { Navbar ,Container,Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">Trending Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
          <Nav.Link as={NavLink} to="/actors">Actors</Nav.Link>
          <NavDropdown title="Genres" id="basic-nav-dropdown">
            <NavDropdown.Item  as={NavLink} to="/movies/horror">Horror</NavDropdown.Item>
            <NavDropdown.Item  as={NavLink} to="/movies/comedy">Comedy</NavDropdown.Item>
            <NavDropdown.Item  as={NavLink} to="/movies/sf">Science Fiction</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;
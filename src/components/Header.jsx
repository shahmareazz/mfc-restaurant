
import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="./mfc-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MFC
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
             <Nav.Link as={Link} to="/About">About Us</Nav.Link>
             <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
import { Link, NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar () {
    return (
        <>
    <Navbar expand="sm" className="navContent">
      <Container>
        <Navbar.Brand href="/">Monster Catalogue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="List" id="basic-nav-dropdown">
              <NavDropdown.Item href="/monsters">Monster List</NavDropdown.Item>
              <NavDropdown.Item href="/favourites">Favourites</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
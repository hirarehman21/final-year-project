import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

import {Link} from 'react-router-dom';

// using functional component because navbar is stateless
function Navigation() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link className="nav-links h3" to="/">ChillZone</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-links ml-4" to="/recommend">Recommendations</Link>
            <Link className="nav-links ml-3" to="/lists">Lists</Link>
            <Link className="nav-links ml-3" to="/search">Search</Link> 
          </Nav>
          <Nav>
            <Link className="nav-links mr-3" to ="/login">Login</Link>
            <Link className="nav-links" to ="/register">Register</Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;
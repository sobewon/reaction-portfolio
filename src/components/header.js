import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({setPage}) {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="/">My Website</Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/about">
              <Nav.Link href="/about" className="nav-links" onClick={() => { setPage("about"); }}>About Me</Nav.Link>
            </Link>
            <Link to="/portfolio">
            <Nav.Link href="/portfolio" className="nav-links" onClick={() => { setPage("portfolio"); }}>Portfolio</Nav.Link>
            </Link>
            <Link to="/resume">
            <Nav.Link href="/resume" className="nav-links" onClick={() => { setPage("resume"); }}>Resume</Nav.Link>
            </Link>
            <Link to="/contact">
            <Nav.Link href="/contact" className="nav-links" onClick={() => { setPage("contact"); }}>Contact Info</Nav.Link>
            </Link>
          </Nav>
      </Navbar>
    </>
  )
};

export default Header;
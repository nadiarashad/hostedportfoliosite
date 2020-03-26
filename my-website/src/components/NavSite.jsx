import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavSite = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav class="navbar-nav mr-auto">
          <Nav.Link className="Nav" href="/">
            About
          </Nav.Link>
          <Nav.Link className="Nav" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="Nav" href="/contact">
            Get in touch
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavSite;

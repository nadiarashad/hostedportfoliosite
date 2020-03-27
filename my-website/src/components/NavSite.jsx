import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavSite = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav class="navbar-nav mr-auto">
          <Nav.Link className="Nav" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="Nav" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="Nav" href="/charity">
            Charity
          </Nav.Link>
          <Nav.Link className="Nav" href="/contact">
            Say hi
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavSite;

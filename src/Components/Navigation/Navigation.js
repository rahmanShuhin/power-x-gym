import React from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="nav-brand">
          POWER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-light mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">
              Services
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">
              Our Claases
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">
              About Us
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">
              Blog
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">
              Pricing
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import brandLogo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar fixed="top" bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={brandLogo} style={{ width: "50px" }} alt="MediCare" /> MEDI
          <span className="color-orange">CARE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Login
            </Nav.Link>
            <Link to="/">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import brandLogo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
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
            {user?.email && (
              <div className="d-flex justify-content-center mb-3 mb-lg-0 align-items-center me-3">
                <img src={user.photoURL} className="user-img" alt="" />
                <p className="ms-2 mb-1">{user.displayName}</p>
              </div>
            )}
            {user?.email ? (
              <Link to="/">
                {" "}
                <Button onClick={logOut} variant="primary">
                  Log Out
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

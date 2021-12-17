import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import img from "../assets/logo.png";
import { Link } from "react-scroll";
const Header = () => {
  /*to="contact" offset={-100} smooth={true} delay={0}*/
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="p-2"
      >
        <Navbar.Brand href="#home">
          <img src={img} width="40" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link to="home" offset={-100} smooth={true} delay={0}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#portfolio">
              <Link to="portfolio" offset={-100} smooth={true} delay={0}>
                Portfolio
              </Link>
            </Nav.Link>
            <Nav.Link href="#footer">
              <Link to="about" offset={-100} smooth={true} delay={0}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#footer">
              <Link to="contact" offset={-100} smooth={true} delay={0}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export { Header };

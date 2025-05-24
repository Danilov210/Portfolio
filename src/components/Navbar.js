import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

// Navigation links as objects
const navLinks = [
  { to: "/", icon: <AiOutlineHome style={{ marginBottom: "2px" }} />, label: "Home" },
  { to: "/about", icon: <AiOutlineUser style={{ marginBottom: "2px" }} />, label: "About" },
  { to: "/project", icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />, label: "Projects" },
  { to: "/resume", icon: <CgFileDocument style={{ marginBottom: "2px" }} />, label: "Resume" },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Scroll effect to change navbar background
  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Toggle
          className="ms-auto"
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-center w-100">
            {navLinks.map(({ to, icon, label }) => (
              <Nav.Item key={`${to}-${label}`}>
                <Nav.Link
                  as={NavLink}
                  to={to}
                  onClick={() => {
                    if (expand === "expanded") updateExpanded(false);
                  }}
                  title={label}
                >
                  {icon} {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
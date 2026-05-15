import {
  Navbar,
  Nav,
  Container,
  Image,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";

import logo from "../assets/logo-transparent.png";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      bg="white"
      variant="light"
      className="py-3 border-bottom shadow-sm"
    >
      <Container>

        {/* LOGO */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center gap-2 text-decoration-none"
        >
          <div className="">
            <Image
              src={logo}
              alt="VS Projects Logo"
              width={36}
              height={36}
              className="object-fit-contain"
            />
          </div>

          <div className="d-flex flex-column lh-sm">
            <span className="fw-bold fs-5 text-dark">
              VS Projects
            </span>

            <small className="text-muted">
              Full-Stack Developer
            </small>
          </div>
        </Navbar.Brand>

        {/* TOGGLE */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          className="border-0 shadow-none"
        />

        {/* NAVIGATION */}
        <Navbar.Collapse id="main-navbar">

          <Nav className="ms-auto align-items-lg-center gap-2 pt-4 pt-lg-0">

            <Nav.Link
              as={NavLink}
              to="/"
              className="fw-medium px-3 py-2 rounded-3"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/projects"
              className="fw-medium px-3 py-2 rounded-3"
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className="fw-medium px-3 py-2 rounded-3"
            >
              About
            </Nav.Link>

            {/* PRESERVED YOUR CUSTOM CLASS */}
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="main-btn text-center ms-lg-3 text-light px-4 py-2"
            >
              Contact
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
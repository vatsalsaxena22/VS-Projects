import { Container, Row, Col, Image } from "react-bootstrap";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

import { NavLink } from "react-router-dom";

import logo from "../assets/logo-transparent.png";

export default function Footer() {
  return (
    <footer className="border-top bg-white">

      <Container className="py-5">

        <Row className="gy-5 justify-content-between">

          {/* BRAND */}
          <Col lg={5}>

            <div className="d-flex align-items-center gap-3 mb-4">

              <div className="">
                <Image
                  src={logo}
                  alt="VS Projects Logo"
                  width={55}
                  height={55}
                  className="object-fit-contain"
                />
              </div>

              <div>
                <h2 className="fw-bold mb-1">
                  VS Projects
                </h2>

                <p className="text-muted mb-0">
                  A showcase of all my projects built
                  with care, code, and creativity.
                </p>
              </div>

            </div>

            {/* SOCIALS */}
            <div className="logos d-flex align-items-center gap-3 fs-4">

              <a
                href="https://github.com/vatsalsaxena22"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light border rounded-3 p-2 d-flex align-items-center justify-content-center"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/vatsalsaxena/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light border rounded-3 p-2 d-flex align-items-center justify-content-center"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.facebook.com/vatsalya.saxena.3/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light border rounded-3 p-2 d-flex align-items-center justify-content-center"
              >
                <Facebook />
              </a>

              <a
                href="https://www.instagram.com/vatsal.saxena/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light border rounded-3 p-2 d-flex align-items-center justify-content-center"
              >
                <Instagram />
              </a>

            </div>

          </Col>

          {/* LINKS */}
          <Col xs={6} md={3} lg={2}>

            <h5 className="fw-bold mb-4">
              My Tech Trio
            </h5>

            <div className="d-flex flex-column gap-3">

              <a
                href="https://vatsalsaxena22.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                VS Portfolio
              </a>

              <NavLink
                to="/"
                className="text-decoration-none"
              >
                VS Projects
              </NavLink>

              <a
                href="#"
                className="text-decoration-none"
              >
                VS Works
              </a>

            </div>

          </Col>

          {/* MENU */}
          <Col xs={6} md={3} lg={2}>

            <h5 className="fw-bold mb-4">
              Menu
            </h5>

            <div className="d-flex flex-column gap-3">

              <NavLink
                to="/"
                className="text-decoration-none"
              >
                Home
              </NavLink>

              <NavLink
                to="/projects"
                className="text-decoration-none"
              >
                Projects
              </NavLink>

              <NavLink
                to="/about"
                className="text-decoration-none"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className="text-decoration-none"
              >
                Contact
              </NavLink>

            </div>

          </Col>

        </Row>

        {/* BOTTOM */}
        <div className="border-top mt-5 pt-4 text-center">

          <p className="text-muted mb-0 small">
            © {new Date().getFullYear()} VS Projects.
            All rights reserved.

            <br className="d-md-none" />

            <span className="mx-1 d-none d-md-inline">
              •
            </span>

            Developed & Designed by{" "}

            <a
              href="https://vatsalsaxena22.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ lineBreak: "anywhere" }}
              className="fw-semibold text-decoration-none"
            >
              Vatsal Saxena
            </a>

          </p>

        </div>

      </Container>
    </footer>
  );
}
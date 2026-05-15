import { Container, Row, Col, Image } from "react-bootstrap";
import { ArrowRight, CodeSlash, Stars } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

import heroImg from "../assets/programming.svg";

export default function Hero() {
  return (
    <section className="hero-section py-5 py-lg-6 overflow-hidden">

      <Container>

        <Row className="align-items-center g-5">

          {/* LEFT CONTENT */}
          <Col
            xs={12}
            lg={6}
            className="
              text-center
              text-lg-start
              d-flex
              flex-column
              justify-content-center
              align-items-center
              align-items-lg-start
            "
          >

            {/* BADGE */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="main-badge d-inline-flex align-items-center gap-2">
                <Stars size={14} />
                Hello there,
              </span>
            </div>

            {/* HEADING */}
            <h1 className="display-4 fw-bold lh-sm mb-4">
              Welcome to{" "}
              <span className="text-main">
                VS Projects
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-body-secondary fs-5 mb-4">
              A curated showcase of my web development journey —
              featuring modern interfaces, scalable applications,
              and creative digital experiences built with care,
              code, and creativity.
            </p>

            {/* BUTTONS */}
            <div className="
              d-flex
              flex-wrap
              gap-3
              justify-content-center
              justify-content-lg-start
              mb-4
            ">

              <NavLink
                to="/projects"
                className="main-btn d-inline-flex align-items-center gap-2"
              >
                Explore Projects
                <ArrowRight size={18} />
              </NavLink>

              <NavLink
                to="/about"
                className="main-btn btn-white d-inline-flex align-items-center gap-2"
              >
                <CodeSlash size={18} />
                About Me
              </NavLink>

            </div>

            {/* STATS / TAGS */}
            <div className="
              d-flex
              flex-wrap
              gap-3
              justify-content-center
              justify-content-lg-start
            ">

              <div className="px-3 py-2 bg-light border rounded-4 small fw-medium">
                React.js
              </div>

              <div className="px-3 py-2 bg-light border rounded-4 small fw-medium">
                Bootstrap 5
              </div>

              <div className="px-3 py-2 bg-light border rounded-4 small fw-medium">
                Full-Stack Development
              </div>

            </div>

          </Col>

          {/* RIGHT IMAGE */}
          <Col
            xs={12}
            lg={6}
            className="text-center position-relative"
          >

            {/* IMAGE WRAPPER */}
            <div className="position-relative">

              {/* BG SHAPE */}
              <div
                className="
                  position-absolute
                  top-50
                  start-50
                  translate-middle
                  rounded-circle
                  bg-primary
                  opacity-10
                "
                style={{
                  width: "350px",
                  height: "350px",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* IMAGE */}
              <Image
                src={heroImg}
                alt="Programming Illustration"
                fluid
                className="position-relative z-1"
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}
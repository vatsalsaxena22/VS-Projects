import { Container, Row, Col, Image } from "react-bootstrap";
import { ArrowRight, CodeSlash, Stars } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

import heroImg from "../assets/programming.svg";

export default function Hero() {
return (
<section className="py-5 overflow-hidden bg-body">
<Container className="py-lg-5">
<Row className="align-items-center gy-5 gx-lg-5">

      {/* LEFT CONTENT */}
      <Col
        xs={12}
        lg={6}
        className="text-center text-lg-start"
      >
        <div className="d-flex flex-column align-items-center align-items-lg-start">

          {/* BADGE */}
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4 rounded-pill border bg-body-tertiary text-body-secondary small fw-semibold">
            <Stars size={15} className="text-primary" />
            Turning ideas into digital experiences
          </div>

          {/* HEADING */}
          <h1 className="display-3 fw-bold lh-1 mb-4">
            Welcome to
            <br />
            <span className="text-primary">
              VS Projects.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="fs-5 text-body-secondary lh-lg mb-4">
            A showcase of ideas, experiments, and digital products.
            Explore my journey in building modern websites,
            powerful applications, and meaningful web experiences.
          </p>

          {/* CTA BUTTONS */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">

            <NavLink
              to="/projects"
              className="btn btn-primary btn-lg rounded-3 d-inline-flex align-items-center justify-content-center gap-2 px-4"
            >
              Explore Projects
              <ArrowRight size={18} />
            </NavLink>

            <NavLink
              to="/about"
              className="btn btn-outline-secondary btn-lg rounded-3 d-inline-flex align-items-center justify-content-center gap-2 px-4"
            >
              <CodeSlash size={18} />
              About Me
            </NavLink>

          </div>

          {/* TECH STACK */}
          <div className="d-flex flex-column align-items-center align-items-lg-start gap-2 mt-2">

            <span className="small text-body-secondary fw-semibold text-uppercase">
              Technologies & Expertise
            </span>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
              {["React.js", "Bootstrap 5", "Node.js", "PHP"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="badge rounded-pill bg-body-tertiary border text-body-secondary px-3 py-2 fw-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

          </div>

        </div>
      </Col>

      {/* RIGHT VISUAL */}
      <Col xs={12} lg={6}>
        <div className="position-relative d-flex align-items-center justify-content-center">

          {/* BACKGROUND DECORATION */}
          <div
            className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary opacity-10"
            style={{
              width: "min(75vw, 380px)",
              height: "min(75vw, 380px)",
            }}
            aria-hidden="true"
          />

          {/* GRID / VISUAL WRAPPER */}
          <div className="position-relative w-100 text-center">

            <Image
              src={heroImg}
              alt="Programming and web development illustration"
              fluid
              fetchPriority="high"
              className="position-relative"
              style={{
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />

            {/* FLOATING LABEL */}
            <div className="position-absolute top-0 start-0 translate-middle-y d-none d-sm-flex align-items-center gap-2 bg-body border rounded-4 shadow-sm px-3 py-2">
              <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3 p-2">
                <CodeSlash size={20} />
              </span>
              <div className="text-start">
                <div className="small fw-bold text-body">
                  Creative Development
                </div>
                <div className="text-body-secondary small">
                  Design. Develop. Deploy.
                </div>
              </div>
            </div>

            {/* BOTTOM LABEL */}
            <div className="position-absolute bottom-0 end-0 d-none d-sm-flex align-items-center gap-2 bg-body border rounded-4 shadow-sm px-3 py-2">
              <Stars size={20} className="text-primary" />
              <span className="small fw-semibold text-body">
                Built with curiosity
              </span>
            </div>

          </div>
        </div>
      </Col>

    </Row>
  </Container>
</section>

);
}
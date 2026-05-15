import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
} from "react-bootstrap-icons";

import ContactForm from "../components/ContactForm";

const socialLinks = [
  {
    icon: <Github />,
    url: "https://github.com/vatsalsaxena22",
    color: "#181717",
    name: "GitHub",
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/vatsalsaxena/",
    color: "#0077B5",
    name: "LinkedIn",
  },
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/vatsalya.saxena.3/",
    color: "#1877F2",
    name: "Facebook",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/vatsal.saxena/",
    color: "#E1306C",
    name: "Instagram",
  },
];

const Contact = () => {
  return (
    <section className="contact-page py-5">
      <Container>

        {/* HERO */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <span className="main-badge mb-3 d-inline-block">
              Let's Connect
            </span>

            <h1 className="fw-bold display-5 mb-3">
              Let's Build Something Amazing Together
            </h1>

            <p className="text-muted fs-5">
              Have a project idea, collaboration opportunity,
              or just want to say hello? Feel free to reach out.
              I'm always open to discussing new ideas and modern web experiences.
            </p>
          </Col>
        </Row>

        {/* MAIN SECTION */}
        <Row className="g-4 align-items-stretch">

          {/* LEFT SIDE */}
          <Col lg={5}>
            <Card className="border-0 shadow-sm h-100 contact-info-card">
              <Card.Body className="p-4 p-lg-5 d-flex flex-column">

                <div className="mb-4">
                  <span className="main-badge mb-3 d-inline-block">
                    Social Links
                  </span>

                  <h2 className="fw-bold mb-3">
                    Follow My Journey
                  </h2>

                  <p className="text-muted">
                    Stay connected and explore my latest
                    projects, updates, and development work
                    across different platforms.
                  </p>
                </div>

                {/* SOCIAL ICONS */}
                <div className="d-flex flex-wrap gap-3 mb-4">

                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.name}
                      style={{
                        color: social.color,
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}

                </div>

                {/* EXTRA CARD */}
                <div className="mt-auto p-4 rounded-4 bg-light border">
                  <h5 className="fw-bold mb-2">
                    Available For
                  </h5>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="main-badge">
                      Freelance
                    </span>

                    <span className="main-badge">
                      Full-Stack Projects
                    </span>

                    <span className="main-badge">
                      Frontend Development
                    </span>
                  </div>

                  <p className="text-muted small mb-0">
                    Open to startup collaborations,
                    business websites, dashboards,
                    and modern web applications.
                  </p>
                </div>

              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm h-100 contact-form-card">
              <Card.Body className="p-4 p-lg-5">

                <div className="mb-4">
                  <span className="main-badge mb-3 d-inline-block">
                    Contact Me
                  </span>

                  <h2 className="fw-bold mb-3">
                    Send Me a Message
                  </h2>

                  <p className="text-muted">
                    Fill out the form below and I’ll
                    get back to you as soon as possible.
                  </p>
                </div>

                <ContactForm />

                {/* BOTTOM NOTE */}
                <div className="d-flex align-items-center gap-2 mt-4 text-muted small">
                  <ArrowRight />
                  Usually responds within 24 hours
                </div>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;
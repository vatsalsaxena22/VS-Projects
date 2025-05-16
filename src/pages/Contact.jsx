import React from "react";
import { Container, Row, Col,  Card,  } from "react-bootstrap";
import { Github, Linkedin, Envelope, Facebook, Instagram } from 'react-bootstrap-icons';
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Container className="my-5">
      {/* Section 1: Follow me */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4 text-center">Follow me on Social Media</h2>
          <Card className="p-4 shadow-sm text-center">
            <Card.Body className="fs-1 d-flex gap-3 justify-content-center">
              <a
                href="https://github.com/vatsalsaxena22"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#181717"}}
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/vatsalsaxena/"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#0077B5"}}
              >
                <Linkedin />
              </a>
              <a
                href="https://www.facebook.com/vatsalya.saxena.3/"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#1877F2"}}
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/vatsal.saxena/"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#E1306C"}}
              >
                <Instagram />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section 2: Contact Form */}
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <h2 className="mb-4 text-center">Contact Me</h2>
        <Card className="p-4 shadow-sm">
          <ContactForm/>
        </Card>
      </Col>
    </Row>


    </Container>
  );
};

export default Contact;

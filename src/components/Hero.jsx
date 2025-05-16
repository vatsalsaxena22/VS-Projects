import { Container, Row, Col, Image } from "react-bootstrap";
import heroImg from "../assets/programming.svg";

export default function Hero() {
  return (
    <section className="text-center hero-section">
      <Container>
        <Row>
          <Col
            className="my-5 p-3 text-start d-flex gap-2 flex-column justify-content-center align-items-start"
            xs={12}
            md={6}
          >
            <h6 className="main-badge">Hello there,</h6>
            <h1>Welcome to VS Projects</h1>
            <p className="text-body-secondary">
              A showcase of all my web projects built with care, code, and
              creativity. From front-end finesse to back-end logic, here are the
              projects that reflect my journey in web development.
            </p>
            <div>
              <a href="/projects" className="main-btn">
                Explore
              </a>
              <a href="/about" className="main-btn btn-white">
                About me
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={heroImg} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

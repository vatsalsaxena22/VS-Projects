import { Container, Row, Col, Image } from "react-bootstrap";
import myPic from "../assets/Profile.jpg";
import VSTrio from "../components/VSTrio";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "W3.css",
    "W3.js",
    "Git",
    "GitHub",
    "Hostinger",
    "Google Sites",
    "Blogger",
    "WordPress",
    "Bootstrap 5",
    "Tailwind.css",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section id="about" className="py-5">
      <Container className="my-2 py-2">
        <h2 className="text-center mb-5">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image
              src={myPic}
              roundedCircle
              fluid
              alt="Vatsal Saxena"
              className="profile-image"
              style={{ maxWidth: "200px" }}
            />
          </Col>
          <Col md={8}>
            <h4 className="mb-4">I am Vatsal Saxena</h4>
            <h6 className="fw-bold">Description</h6>
            <p>
              I'm a passionate full-stack developer focused on building modern,
              responsive, and high-performance websites. With experience in both
              frontend and backend technologies, I love turning complex problems
              into elegant solutions.
            </p>
            <h6 className="fw-bold">Skills</h6>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span key={index} className="main-badge me-2 mb-2 badge">
                  {skill}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <div className="border m-5"></div>

      <Container className="container py-5">
        <h2>My Tech Trio</h2>
        <VSTrio></VSTrio>
      </Container>
    </section>
  );
}

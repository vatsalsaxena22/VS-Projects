import React from "react";
import projects from "../data/projects";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const FeaturedProjects = () => {
  const featured = projects.filter((project) => project.featured).slice(-3);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center p-5">Featured Projects</h2>
        <Row>
          {featured.map((project) => (
            <Col key={project.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <img className="border" src={project.img} alt={project.title} width={"100%"} />
                  <Card.Title className="my-2">{project.title}</Card.Title>
                  <div className="my-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} bg="none" className="me-1 main-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    href={project.liveLink}
                    target="_blank"
                    className="main-btn"
                  >
                    Live
                  </Button>
                  {project.githubLink && (
                    <Button
                      href={project.githubLink}
                      target="_blank"
                      className="main-btn btn-white"
                    >
                      Code
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center p-5">
          <a href="/projects" className="main-btn btn-white">
            All Projects
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;

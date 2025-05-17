import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProjectCard = ({ title, imageSrc, altText, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Col md={6} lg={4} className="my-4">
      <Card
        className="h-100 shadow-sm position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="position-relative overflow-hidden">
            <img
              src={imageSrc}
              alt={altText}
              className="w-100"
              style={{
                transition: "all 0.5s ease",
                opacity: isHovered ? 0.5 : 1,
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
            {isHovered && (
              <div
                className="position-absolute d-flex justify-content-center align-items-center"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <a href={link} target="" rel="noopener noreferrer">
                  <Button className="main-btn">View</Button>
                </a>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const VSTrio = () => {
  const imageModules = import.meta.glob("../assets/VS Trio/*.png", {
    eager: true,
  });

  const images = Object.fromEntries(
    Object.entries(imageModules).map(([path, mod]) => {
      const fileName = path.split("/").pop();
      return [fileName, mod.default];
    })
  );

  const projects = [
    {
      id: 1,
      title: "VS Portfolio",
      imageSrc: images["VS Portfolio.png"],
      altText: "VS Portfolio Project",
      link: "https://vatsalsaxena22.github.io/",
    },
    {
      id: 2,
      title: "VS Projects",
      imageSrc: images["VS Projects.png"],
      altText: "VS Projects Project",
      link: "https://vatsalsaxena-projects.netlify.app",
    },
    {
      id: 3,
      title: "VS Works",
      imageSrc: images["Coming soon.png"],
      altText: "VS Works Project",
      link: "#",
    },
  ];

  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageSrc={project.imageSrc}
            altText={project.altText}
            link={project.link}
          />
        ))}
      </Row>
    </Container>
  );
};

export default VSTrio;

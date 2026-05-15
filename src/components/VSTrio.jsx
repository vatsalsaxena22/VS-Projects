import React from "react";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import ProjectCard from "./ProjectCard";

const VSTrio = () => {
  const imageModules = import.meta.glob(
    "../assets/VS Trio/*.png",
    {
      eager: true,
    }
  );

  const images = Object.fromEntries(
    Object.entries(imageModules).map(
      ([path, mod]) => {
        const fileName = path.split("/").pop();

        return [fileName, mod.default];
      }
    )
  );

  const projects = [
    {
      id: 1,
      title: "VS Portfolio",
      description:
        "My personal portfolio showcasing skills, experience, and development journey.",

      tech: [
        "HTML",
        "Custom CSS",
        "Vanilla JS",
      ],

      liveLink:
        "https://vatsalsaxena22.github.io/",

      githubLink: null,

      img: images["VS Portfolio.png"],
    },

    {
      id: 2,
      title: "VS Projects",

      description:
        "A curated showcase of all my personal and professional web development projects.",

      tech: [
        "React",
        "Vite",
        "Bootstrap 5",
      ],

      liveLink:
        "https://vsprojects.vercel.app/",

      githubLink:
        "https://github.com/vatsalsaxena22/VS-Projects",

      img: images["VS Projects.png"],
    },

    {
      id: 3,
      title: "VS Works",

      description:
        "An upcoming platform focused on creative work, development experiments, and digital products.",

      tech: [
        "Coming Soon",
      ],

      liveLink: "#",

      githubLink: null,

      img: images["Coming soon.png"],
    },
  ];

  return (
    <section className="py-2">

      <Container>

        <Row className="g-4">

          {projects.map((project) => (
            <Col
              key={project.id}
              md={6}
              lg={4}
            >
              <ProjectCard {...project} />
            </Col>
          ))}

        </Row>

      </Container>

    </section>
  );
};

export default VSTrio;
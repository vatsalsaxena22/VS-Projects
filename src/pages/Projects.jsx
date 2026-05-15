import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import {
  Folder2Open,
  CodeSlash,
} from "react-bootstrap-icons";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-5 py-lg-6 bg-white"
    >

      <Container>

        {/* HERO */}
        <Row className="justify-content-center text-center mb-5">

          <Col lg={8}>

            <span className="main-badge mb-3 d-inline-flex align-items-center gap-2">
              <Folder2Open size={14} />
              My Work
            </span>

            <h1 className="fw-bold display-5 mb-3">
              Projects Portfolio
            </h1>

            <p className="text-body-secondary fs-5">
              A collection of personal, freelance,
              and professional projects showcasing
              my journey in modern web development,
              UI design, and scalable applications.
            </p>

          </Col>

        </Row>

        {/* QUICK STATS */}
        <Row className="justify-content-center mb-5">

          <Col lg={10}>

            <div
              className="
                bg-light
                border
                rounded-4
                p-4
              "
            >

              <Row className="text-center g-4">

                <Col xs={6} md={3}>
                  <h3 className="fw-bold text-main mb-1">
                    {projects.length}+
                  </h3>

                  <p className="text-muted mb-0 small">
                    Total Projects
                  </p>
                </Col>

                <Col xs={6} md={3}>
                  <h3 className="fw-bold text-main mb-1">
                    React
                  </h3>

                  <p className="text-muted mb-0 small">
                    Frontend Focus
                  </p>
                </Col>

                <Col xs={6} md={3}>
                  <h3 className="fw-bold text-main mb-1">
                    Full-Stack
                  </h3>

                  <p className="text-muted mb-0 small">
                    Modern Solutions
                  </p>
                </Col>

                <Col xs={6} md={3}>
                  <h3 className="fw-bold text-main mb-1">
                    UI/UX
                  </h3>

                  <p className="text-muted mb-0 small">
                    Clean Interfaces
                  </p>
                </Col>

              </Row>

            </div>

          </Col>

        </Row>

        {/* PROJECT GRID */}
        <Row className="g-4">

          {projects
            .slice()
            .reverse()
            .map((project) => (
              <Col
                key={project.id}
                md={6}
                lg={4}
              >
                <ProjectCard {...project} />
              </Col>
            ))}

        </Row>

        {/* BOTTOM NOTE */}
        <div className="text-center mt-5">

          <div
            className="
              d-inline-flex
              align-items-center
              gap-2
              px-4
              py-3
              rounded-4
              bg-light
              border
              text-muted
              small
            "
          >
            <CodeSlash size={16} />
            Continuously building and improving new projects.
          </div>

        </div>

      </Container>

    </section>
  );
};

export default Projects;
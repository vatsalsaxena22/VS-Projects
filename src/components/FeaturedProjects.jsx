import React from "react";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { ArrowRight } from "react-bootstrap-icons";

import { NavLink } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const featured = projects
    .filter((project) => project.featured)
    .slice(-3);

  return (
    <section className="py-5 py-lg-6 bg-light">

      <Container>

        {/* SECTION HEADER */}
        <Row className="justify-content-center text-center mb-5">

          <Col lg={7}>

            <span className="main-badge mb-3 d-inline-block">
              Featured Work
            </span>

            <h2 className="fw-bold display-6 mb-3">
              Selected Projects
            </h2>

            <p className="text-body-secondary fs-5">
              A collection of projects that highlight
              my skills in frontend development,
              full-stack applications, and modern UI design.
            </p>

          </Col>

        </Row>

        {/* PROJECTS */}
        <Row className="g-4">

          {featured.map((project) => (
            <Col
              key={project.id}
              md={6}
              lg={4}
            >
              <ProjectCard {...project} />
            </Col>
          ))}

        </Row>

        {/* CTA */}
        <div className="text-center mt-5">

          <NavLink
            to="/projects"
            className="
              main-btn
              btn-white
              d-inline-flex
              align-items-center
              gap-2
            "
          >
            View All Projects
            <ArrowRight size={16} />
          </NavLink>

        </div>

      </Container>

    </section>
  );
};

export default FeaturedProjects;
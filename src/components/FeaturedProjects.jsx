
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(-3);

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="main-badge mb-4 inline-block">
            Featured Work
          </span>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Selected Projects
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            A collection of projects that highlight my skills in
            frontend development, full-stack applications,
            and modern UI design.
          </p>
        </div>

        {/* PROJECTS GRID */}
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-gray-500">
            Featured projects will be available soon.
          </p>
        )}

        {/* CTA */}
        <div className="mt-12 text-center sm:mt-14">
          <NavLink
            to="/projects"
            className="main-btn btn-white inline-flex items-center gap-2"
          >
            View All Projects
            <FontAwesomeIcon
              icon={faArrowRight}
              aria-hidden="true"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

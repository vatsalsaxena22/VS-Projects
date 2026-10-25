import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(-3)
  .reverse();

export default function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
            <FontAwesomeIcon icon={faLayerGroup} aria-hidden="true" />
            Featured Work
          </span>

          <h2 className="display-title mb-4">
            Selected <span className="display-title__accent">Projects.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            A curated collection of projects, experiments, and digital
            products showcasing my approach to frontend development,
            full-stack engineering, and thoughtful UI design.
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
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-14 text-center">
            <p className="text-sm font-medium text-gray-500">
              Featured projects are coming soon.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center sm:mt-14">
          <NavLink
            to="/projects"
            className="main-btn btn-white"
          >
            View All Projects
            <FontAwesomeIcon
              icon={faArrowRight}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

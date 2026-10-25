import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faCode,
  faLayerGroup,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const sortedProjects = projects.slice().reverse();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* HERO */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
            <FontAwesomeIcon icon={faFolderOpen} aria-hidden="true" />
            Project Library
          </span>

          <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Projects Portfolio
            <span className="text-[#233DFF]">.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Personal builds, experiments, and professional work.
            Explore the projects behind my journey in web development,
            full-stack engineering, and UI/UX design.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mx-auto mb-14 max-w-5xl sm:mb-16">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0">
              {/* TOTAL PROJECTS */}
              <div className="px-4 py-6 text-center sm:px-6 sm:py-8">
                <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#233DFF] sm:text-4xl">
                  {projects.length}+
                </h2>
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                  Total Projects
                </p>
              </div>

              {/* FRONTEND */}
              <div className="px-4 py-6 text-center sm:px-6 sm:py-8">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  React
                </h2>
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                  Frontend Focus
                </p>
              </div>

              {/* FULL STACK */}
              <div className="px-4 py-6 text-center sm:px-6 sm:py-8">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Full-Stack
                </h2>
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                  End-to-End Builds
                </p>
              </div>

              {/* DESIGN */}
              <div className="px-4 py-6 text-center sm:px-6 sm:py-8">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  UI/UX
                </h2>
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                  Interface Design
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT SECTION HEADER */}
        <div className="mb-7 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#233DFF]">
              <FontAwesomeIcon icon={faLayerGroup} aria-hidden="true" />
              Explore the collection
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
              All Projects
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Browse my latest builds and experiments.
            </p>
          </div>

          {projects.length > 0 && (
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-500">
              <FontAwesomeIcon
                icon={faArrowDownWideShort}
                aria-hidden="true"
              />
              Latest first
            </div>
          )}
        </div>

        {/* PROJECT GRID */}
        {sortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-16 text-center">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="mb-4 text-3xl text-gray-300"
              aria-hidden="true"
            />
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Nothing here yet
            </h2>
            <p className="text-sm text-gray-500">
              Projects will be available soon.
            </p>
          </div>
        )}

        {/* BOTTOM NOTE */}
        <div className="mt-12 text-center sm:mt-16">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-500">
            <FontAwesomeIcon
              icon={faCode}
              className="text-[#233DFF]"
              aria-hidden="true"
            />
            Continuously building, learning, and improving.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
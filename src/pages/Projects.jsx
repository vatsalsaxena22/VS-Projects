
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* HERO */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="main-badge mb-4 inline-flex items-center gap-2">
            <FontAwesomeIcon
              icon={faFolderOpen}
              aria-hidden="true"
            />
            My Work
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Projects Portfolio
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            A collection of personal, freelance, and professional
            projects showcasing my journey in modern web development,
            UI design, and scalable applications.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mx-auto mb-12 max-w-5xl sm:mb-14">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-8">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              <div>
                <h3 className="mb-1 text-3xl font-bold text-main">
                  {projects.length}+
                </h3>
                <p className="text-sm text-gray-500">
                  Total Projects
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-2xl font-bold text-main sm:text-3xl">
                  React
                </h3>
                <p className="text-sm text-gray-500">
                  Frontend Focus
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-xl font-bold text-main sm:text-3xl">
                  Full-Stack
                </h3>
                <p className="text-sm text-gray-500">
                  Modern Solutions
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-2xl font-bold text-main sm:text-3xl">
                  UI/UX
                </h3>
                <p className="text-sm text-gray-500">
                  Clean Interfaces
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT GRID */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects
              .slice()
              .reverse()
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                />
              ))}
          </div>
        ) : (
          <p className="py-12 text-center text-gray-500">
            Projects will be available soon.
          </p>
        )}

        {/* BOTTOM NOTE */}
        <div className="mt-12 text-center sm:mt-14">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
            <FontAwesomeIcon
              icon={faCode}
              aria-hidden="true"
            />
            Continuously building and improving new projects.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

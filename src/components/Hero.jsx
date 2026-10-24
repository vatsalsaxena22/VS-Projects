
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faArrowRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import heroImg from "../assets/programming.svg";

const techStack = ["React.js", "Tailwind CSS", "Full-Stack Development"];

export default function Hero() {
  return (
    <section className="hero-section overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* CONTENT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* BADGE */}
          <span className="main-badge mb-5 inline-flex items-center gap-2">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              aria-hidden="true"
            />
            Hello there,
          </span>

          {/* HEADING */}
          <h1 className="mb-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="text-main">VS Projects</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mb-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            A curated showcase of my web development journey,
            featuring modern interfaces, scalable applications,
            and creative digital experiences built with care
            and code.
          </p>

          {/* ACTIONS */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <NavLink
              to="/projects"
              className="main-btn inline-flex items-center gap-2"
            >
              Explore Projects
              <FontAwesomeIcon
                icon={faArrowRight}
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/about"
              className="main-btn btn-white inline-flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faCode}
                aria-hidden="true"
              />
              About Me
            </NavLink>
          </div>

          {/* TECH STACK */}
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={heroImg}
            alt="Programming illustration representing web development"
            className="h-auto w-full max-w-xl object-contain"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

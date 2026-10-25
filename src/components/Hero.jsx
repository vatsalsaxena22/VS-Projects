import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faArrowRight,
  faCode,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import heroImg from "../assets/programming.svg";

const techStack = [
  "React.js",
  "Tailwind CSS",
  "Full-Stack Development",
];

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* CONTENT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* INTRO BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-700">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              aria-hidden="true"
            />
            <span>Welcome to my project space</span>
          </div>

          {/* HEADING */}
          <h1 className="mb-6 max-w-2xl text-2xl leading-[1.1] font-bold tracking-tight text-gray-950 sm:text-3xl lg:text-4xl xl:text-5xl">
            Ideas, experiments
            <br className="hidden sm:block" />{" "}
            &amp; <span className="text-main">products.</span>
            <span className="mt-2 block text-gray-400">
              Built with curiosity.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mb-8 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            I'm Vatsal Saxena. This is my collection of personal
            projects, side projects, and learning experiments —
            from web applications to ideas brought to life with code.
          </p>

          {/* ACTIONS */}
          <div className="mb-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <NavLink
              to="/projects"
              className="main-btn"
            >
              Explore Projects
              <FontAwesomeIcon
                icon={faArrowRight}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>

            <NavLink
              to="/about"
              className="main-btn btn-white"
            >
              <FontAwesomeIcon
                icon={faCode}
                aria-hidden="true"
              />
              About Me
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                aria-hidden="true"
                className="text-xs"
              />
            </NavLink>
          </div>

          {/* TECH STACK */}
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <span className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">
              Built with
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="relative flex items-center justify-center">
          {/* Decorative frame */}
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-4xl border border-gray-100 bg-gray-50/70 sm:inset-8"
          />

          <img
            src={heroImg}
            alt="Programming illustration representing web development"
            className="relative z-10 h-auto w-full max-w-xl object-contain"
            fetchPriority="high"
            decoding="async"
          />

          {/* Floating label */}
          <div className="absolute bottom-3 left-1 z-20 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg sm:bottom-8 sm:left-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FontAwesomeIcon
                  icon={faCode}
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="mb-0 text-sm font-semibold text-gray-900">
                  Built from scratch
                </p>
                <p className="mb-0 text-xs text-gray-500">
                  One idea at a time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
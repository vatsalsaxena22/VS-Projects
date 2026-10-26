import myPic from "../assets/Profile.jpg";
import VSTrio from "../components/VSTrio";
import skills from "../data/skills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faBolt,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section
      id="about"
      className="page-section"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* HERO */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
            <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
            About Me
          </span>

          <h1 className="display-title mb-5">
            Building Ideas Into <span className="display-title__accent">Digital Experiences.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            I'm a Full-Stack Developer passionate about building modern,
            responsive, and scalable web applications with thoughtful
            UI/UX and practical engineering.
          </p>
        </div>

        {/* MAIN PROFILE CARD */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-8 lg:p-12">
          {/* Subtle decoration */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-blue-100/60 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-14">
            {/* PROFILE IMAGE */}
            <div className="flex justify-center">
              <div className="relative inline-flex items-center justify-center">
                <div
                  className="absolute size-56 rounded-full bg-[#233DFF]/20 blur-3xl sm:size-72"
                  aria-hidden="true"
                />

                <div className="relative rounded-full bg-white p-2 shadow-xl ring-1 ring-gray-200">
                  <img
                    src={myPic}
                    alt="Portrait of Vatsal Saxena"
                    width={240}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    className="size-52 rounded-full object-cover sm:size-60"
                  />
                </div>

                <div className="absolute -bottom-2 right-0 rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-md sm:right-2">
                  <p className="text-xs font-semibold text-gray-900">
                    Full-Stack Developer
                  </p>
                  <p className="mt-0.5 text-[11px] text-gray-500">
                    Designing & Building
                  </p>
                </div>
              </div>
            </div>

            {/* PROFILE CONTENT */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#233DFF]/10 text-[#233DFF] sm:size-14">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-xl sm:text-2xl"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
                    The Developer Behind The Projects
                  </p>

                  <h2 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                    I'm Vatsal Saxena
                  </h2>
                </div>
              </div>

              <p className="mb-8 text-base leading-8 text-gray-600 sm:text-lg">
                I build digital products from frontend interfaces to backend
                systems. My work spans personal experiments, freelance
                projects, and professional applications, combining clean
                code, user-focused design, and practical problem-solving.
                I enjoy turning ideas into useful digital experiences and
                continuously exploring better ways to build for the web.
              </p>

              {/* SKILLS */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-[#233DFF]"
                    aria-hidden="true"
                  />

                  <h3 className="text-base font-bold text-gray-950 sm:text-lg">
                    Skills & Technologies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:border-[#233DFF]/40 hover:bg-blue-50 hover:text-[#233DFF] sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 border-t border-gray-200 sm:my-20" />

        {/* ECOSYSTEM HEADER */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
            <FontAwesomeIcon icon={faLayerGroup} aria-hidden="true" />
            My Ecosystem
          </span>

          <h2 className="display-title mb-5">
            My Tech <span className="display-title__accent">Trio.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Three connected spaces for my developer profile, projects,
            and works across the web.
          </p>
        </div>

        {/* VS TRIO */}
        <VSTrio />
      </div>
    </section>
  );
}

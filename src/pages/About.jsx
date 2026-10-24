
import myPic from "../assets/Profile.jpg";
import VSTrio from "../components/VSTrio";
import skills from "../data/skills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* HERO */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="main-badge mb-4 inline-flex items-center gap-2">
            <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
            About Me
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Full-Stack Developer
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Passionate about building modern, scalable, and visually engaging
            digital experiences with clean UI/UX and efficient development
            practices.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-14">

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="relative inline-flex items-center justify-center">
                <div
                  className="absolute size-56 rounded-full bg-[#233dff]/20 blur-3xl sm:size-64"
                  aria-hidden="true"
                />

                <img
                  src={myPic}
                  alt="Vatsal Saxena"
                  width={230}
                  height={230}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 size-52 rounded-full border-4 border-white object-cover shadow-lg sm:size-60"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#233dff]/10 text-[#233dff]">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-2xl"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    I'm Vatsal Saxena
                  </h2>
                  <p className="text-sm text-gray-500 sm:text-base">
                    Full-Stack Web Developer
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mb-7 text-base leading-8 text-gray-600 sm:text-lg">
                I'm a passionate full-stack developer focused on building
                modern, responsive, and high-performance web applications.
                I enjoy transforming ideas into elegant, scalable digital
                experiences using clean frontend architecture and efficient
                backend solutions.
              </p>

              {/* SKILLS */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-main"
                    aria-hidden="true"
                  />

                  <h3 className="text-lg font-bold text-gray-900">
                    Skills & Technologies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={`${skill}-${index}`} className="main-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 border-t border-gray-200 sm:my-16" />

        {/* VS TRIO HEADER */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="main-badge mb-4 inline-block">
            My Ecosystem
          </span>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Tech Trio
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            A collection of platforms and projects representing my work,
            portfolio, and development journey.
          </p>
        </div>

        {/* VS TRIO */}
        <VSTrio />
      </div>
    </section>
  );
}

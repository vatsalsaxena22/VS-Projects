import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faArrowRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo-transparent.png";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vatsalsaxena22",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vatsalsaxena/",
    icon: faLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vatsal.saxena/",
    icon: faInstagram,
  },
];

const techLinks = [
  {
    label: "VS Portfolio",
    href: "https://vatsalsaxena22.github.io/",
    external: true,
  },
  { label: "VS Projects", to: "/" },
  { label: "VS Works", href: null },
];

const menuLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const linkClass =
  "group inline-flex w-fit items-center gap-2 text-sm text-gray-500 no-underline transition-colors duration-200 hover:text-[#233DFF] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233DFF]";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white">
      {/* TOP ACCENT */}
      <div
        className="h-1 w-full bg-gradient-to-r from-[#233DFF] via-[#6879FF] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-16">
          {/* BRAND */}
          <div className="lg:col-span-5">
            <NavLink
              to="/"
              aria-label="VS Projects home"
              className="mb-5 inline-flex items-center gap-3 no-underline"
            >
              <img
                src={logo}
                alt=""
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="size-14 shrink-0 object-contain"
              />

              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-gray-950">
                  VS Projects
                </h2>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.16em] text-gray-500 sm:text-xs">
                  BUILD · CREATE · INNOVATE
                </p>
              </div>
            </NavLink>

            <p className="mb-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              A curated collection of personal projects, experiments,
              and professional work built with creativity, clean code,
              and modern technology.
            </p>

            {/* SOCIAL LINKS */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Connect with me
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${label} profile`}
                    title={label}
                    className="inline-flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-lg text-gray-600 no-underline transition-all duration-200 hover:-translate-y-1 hover:border-[#233DFF]/30 hover:bg-blue-50 hover:text-[#233DFF] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF]"
                  >
                    <FontAwesomeIcon icon={icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* TECH TRIO */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-900">
              My Tech Trio
            </h3>

            <div className="flex flex-col items-start gap-4">
              {techLinks.map((link) => {
                if (link.to) {
                  return (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      className={linkClass}
                    >
                      {link.label}
                    </NavLink>
                  );
                }

                if (link.href) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={
                        link.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={linkClass}
                    >
                      {link.label}
                      {link.external && (
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-[10px] opacity-60"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                }

                return (
                  <span
                    key={link.label}
                    className="inline-flex items-center gap-2 text-sm text-gray-400"
                    title="Coming soon"
                  >
                    {link.label}
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                      Soon
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-900">
              Quick Navigation
            </h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {menuLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `group inline-flex w-fit items-center gap-2 text-sm no-underline transition-colors duration-200 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233DFF] ${
                      isActive
                        ? "font-semibold text-[#233DFF]"
                        : "text-gray-500 hover:text-[#233DFF]"
                    }`
                  }
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[10px] opacity-50 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                  {label}
                </NavLink>
              ))}
            </div>

            {/* SMALL BRAND NOTE */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#233DFF]">
                <FontAwesomeIcon icon={faCode} aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Made for curious minds.
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Exploring ideas, one project at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} VS Projects. All rights reserved.
          </p>

          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            Designed & Developed by{" "}
            <a
              href="https://vatsalsaxena22.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-800 underline-offset-4 transition-colors hover:text-[#233DFF] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF]"
            >
              Vatsal Saxena
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faArrowRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo-transparent.png";

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919956304705",
    icon: faWhatsapp,
  },
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
  {
    label: "VS Works",
    href: "https://vsworks.vercel.app/",
    external: true,
  },
];

const menuLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const headingClass =
  "mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400";

const linkClass =
  "group inline-flex w-fit items-center gap-2.5 text-sm text-gray-500 no-underline transition-all duration-200 hover:translate-x-1 hover:text-[#233DFF] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233DFF]";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-gray-200/80 bg-white">
      {/* Subtle ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-[#233DFF]/4.5 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* FOOTER MAIN */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-20">
          {/* BRAND */}
          <div className="lg:col-span-5">
            <NavLink
              to="/"
              aria-label="VS Projects home"
              className="group mb-6 inline-flex items-center gap-3.5 no-underline"
            >
              <div className="flex size-14.5 shrink-0 items-center justify-center transition-all duration-300">
                <img
                  src={logo}
                  alt="VS Projects Logo"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="size-12 object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-gray-950">
                  VS Projects
                </h2>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.19em] text-gray-400">
                  BUILD. CREATE. INNOVATE.
                </p>
              </div>
            </NavLink>

            <p className="mb-7 max-w-md text-sm leading-7 text-gray-500 sm:text-[15px]">
              A curated collection of personal projects, experiments, and
              professional work built with creativity, clean code, and modern
              technology.
            </p>

            {/* SOCIAL LINKS */}
            <div>
              <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                Connect with me
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${label} profile`}
                    title={label}
                    className="group relative flex size-11 items-center justify-center overflow-hidden rounded-xl border border-gray-200/80 bg-white text-[17px] text-gray-500 no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#233DFF]/25 hover:bg-[#233DFF]/4 hover:text-[#233DFF] hover:shadow-[0_8px_20px_rgba(35,61,255,0.10)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#233DFF]"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* MY TECH TRIO */}
          <div className="lg:col-span-3">
            <h3 className={headingClass}>Explore my ecosystem</h3>

            <div className="flex flex-col items-start gap-5">
              {techLinks.map((link) => {
                const content = (
                  <>
                    <span className="transition-colors duration-200 group-hover:text-[#233DFF]">
                      {link.label}
                    </span>

                    {link.external && (
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-[10px] text-gray-300 transition-colors group-hover:text-[#233DFF]"
                        aria-hidden="true"
                      />
                    )}
                  </>
                );

                if (link.to) {
                  return (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      className={linkClass}
                    >
                      {content}
                    </NavLink>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK NAVIGATION */}
          <div className="lg:col-span-4">
            <h3 className={headingClass}>Quick navigation</h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-5">
              {menuLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `group inline-flex w-fit items-center gap-2.5 text-sm no-underline transition-colors duration-200 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233DFF] ${
                      isActive
                        ? "font-semibold text-[#233DFF]"
                        : "text-gray-500 hover:text-[#233DFF]"
                    }`
                  }
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[9px] opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  {label}
                </NavLink>
              ))}
            </div>

            {/* BRAND NOTE */}
            <div className="group mt-9 flex items-start gap-3.5 rounded-2xl border border-gray-200/80 bg-linear-to-br from-gray-50 to-white p-4 transition-all duration-300 hover:border-[#233DFF]/20 hover:shadow-[0_8px_30px_rgba(35,61,255,0.05)]">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#233DFF]/8 text-[#233DFF]">
                <FontAwesomeIcon icon={faCode} aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm font-semibold tracking-tight text-gray-900">
                  Made for curious minds.
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Exploring ideas, one project at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 border-t border-gray-200/80 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-6 text-gray-400 sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700">VS Projects</span>.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <p className="text-xs text-gray-400">
              Designed & Developed by{" "}
              <a
                href="https://vatsalsaxena22.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-700 underline-offset-4 transition-colors hover:text-[#233DFF] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF]"
              >
                Vatsal Saxena
              </a>
            </p>
          </div>
        </div>
      </div>
      z
    </footer>
  );
}

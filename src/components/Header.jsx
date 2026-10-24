import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo-transparent.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navClass = ({ isActive }) =>
    `relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-[#233dff]/[0.08] text-[#233dff]"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8"
        aria-label="Main navigation"
      >
        {/* LOGO — UNCHANGED */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 no-underline"
          aria-label="VS Projects home"
        >
          <img
            src={logo}
            alt=""
            width={40}
            height={40}
            className="shrink-0 object-contain"
          />

          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-gray-900">VS Projects</span>
            <span className="text-xs text-gray-500">Full-Stack Developer</span>
          </span>
        </NavLink>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-[#233dff]/30 hover:bg-[#233dff]/5 hover:text-[#233dff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233dff] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="main-navbar"
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="text-xl"
            aria-hidden="true"
          />
        </button>

        {/* NAVIGATION */}
        {/* NAVIGATION */}
        <div
          id="main-navbar"
          className={`${
            isOpen
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          } grid w-full transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:visible lg:flex lg:w-auto lg:grid-rows-none lg:flex-row lg:items-center lg:gap-1 lg:overflow-visible lg:opacity-100`}
        >
          <div className="flex min-h-0 flex-col gap-1 overflow-hidden pb-2 lg:flex-row lg:items-center lg:gap-1 lg:overflow-visible lg:pb-0">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={navClass}
              >
                {({ isActive }) => (
                  <span className="relative">
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-4 left-0 right-0 hidden h-0.5 rounded-full bg-[#233dff] lg:block" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}

            {/* CONTACT CTA — UNCHANGED */}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="main-btn mt-1 inline-flex items-center justify-center px-4 py-2 text-center text-sm font-medium text-light lg:ml-3 lg:mt-0"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

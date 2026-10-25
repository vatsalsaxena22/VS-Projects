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

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navClass = ({ isActive }) =>
    `group relative inline-flex items-center rounded-lg px-4 py-2.5
    text-sm font-medium transition-all duration-200
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[#233dff]
    ${
      isActive
        ? "bg-[#233dff]/[0.07] text-[#233dff]"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8"
        aria-label="Main navigation"
      >
        {/* BRAND */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5 no-underline"
          aria-label="VS Projects home"
        >
          <img
            src={logo}
            alt=""
            width={42}
            height={42}
            className="shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <span className="flex flex-col leading-tight">
            <span className="text-[17px] font-bold tracking-tight text-gray-950 sm:text-lg">
              VS Projects
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.12em] text-gray-500 uppercase">
              By Vatsal Saxena
            </span>
          </span>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={navClass}
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 origin-left rounded-full bg-[#233dff] transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className="main-btn ml-3 inline-flex items-center gap-2 m-0! px-5! py-2.5! text-sm font-medium"
          >
            Contact
            <FontAwesomeIcon
              icon={faArrowRight}
              aria-hidden="true"
              className="text-xs transition-transform duration-200 group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-[#233dff]/30 hover:bg-blue-50 hover:text-[#233dff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233dff] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="main-navbar"
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="text-lg"
            aria-hidden="true"
          />
        </button>

        {/* MOBILE NAVIGATION */}
        <div
          id="main-navbar"
          inert={!isOpen}
          className={`absolute top-full right-0 left-0 border-b border-gray-200 bg-white shadow-lg transition-all duration-200 lg:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-[#233dff]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-[#233dff]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="main-btn mt-3 inline-flex items-center justify-center gap-2 m-0! w-full text-center font-medium"
              >
                Let's Connect
                <FontAwesomeIcon
                  icon={faArrowRight}
                  aria-hidden="true"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
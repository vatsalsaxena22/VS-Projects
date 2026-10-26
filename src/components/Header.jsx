import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo-transparent.png";

/*
  Add new pages here (e.g. Web Games, Startups) and both the desktop
  header and the mobile sidebar update automatically.
*/
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  // { label: "Games", to: "/games" },
  // { label: "Startups", to: "/startups" },
  { label: "About", to: "/about" },
];

/* Replace the placeholder URLs with your real ones */
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
    href: "https://linkedin.com/in/vatsalsaxena/",
    icon: faLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vatsal.saxena/",
    icon: faInstagram,
  },
];

function SocialLinks({ className = "", buttonClassName = "" }) {
  return (
    <ul className={`flex items-center ${className}`}>
      {socialLinks.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
            className={`inline-flex items-center justify-center rounded-lg text-gray-500 transition-colors duration-200 hover:bg-[#233dff]/[0.07] hover:text-[#233dff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233dff] motion-reduce:transition-none ${buttonClassName}`}
          >
            <FontAwesomeIcon icon={icon} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeButtonRef = useRef(null);
  const { pathname } = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Soft shadow once the page starts scrolling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close on route change (covers browser back/forward too)
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Close when the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && closeMenu();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock page scroll + move focus into the sidebar while it is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const desktopLink = ({ isActive }) =>
    `relative flex h-full items-center px-3.5 text-sm font-medium
    transition-colors duration-200 motion-reduce:transition-none
    focus-visible:outline-2 focus-visible:-outline-offset-2
    focus-visible:outline-[#233dff]
    ${isActive ? "text-[#233dff]" : "text-gray-600 hover:text-gray-950"}`;

  const sidebarLink = ({ isActive }) =>
    `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium
    transition-colors motion-reduce:transition-none
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[#233dff]
    ${
      isActive
        ? "bg-[#233dff]/[0.07] text-[#233dff]"
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-950"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-shadow duration-300 motion-reduce:transition-none ${
          isScrolled
            ? "border-gray-200 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.18)]"
            : "border-gray-200/70 shadow-none"
        }`}
      >
        {/* Skip link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:rounded-lg focus:bg-[#233dff] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>

        <nav
          className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          {/* BRAND */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3 rounded-lg no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233dff]"
            aria-label="VS Projects home"
          >
            <img
              src={logo}
              alt=""
              width={38}
              height={38}
              className="shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[17px] font-bold tracking-tight text-gray-950">
                VS Projects
              </span>
              <span className="mt-1 text-[11px] font-medium text-gray-500">
                by Vatsal Saxena
              </span>
            </span>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden h-full items-center lg:flex">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={desktopLink}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {/* Active indicator sits on the header's bottom border */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3.5 -bottom-px h-0.5 origin-center rounded-full bg-[#233dff] transition-transform duration-300 motion-reduce:transition-none ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* SOCIALS */}
            <SocialLinks
              className="mx-4"
              buttonClassName="size-9 text-[17px]"
            />

            <NavLink to="/contact" className="main-btn">
              Contact
              <FontAwesomeIcon
                icon={faArrowRight}
                aria-hidden="true"
                className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233dff] lg:hidden"
            aria-label="Open navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-sidebar"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-lg"
              aria-hidden="true"
            />
          </button>
        </nav>
      </header>

      {/*
        MOBILE SIDEBAR
        Rendered outside <header> on purpose: the header uses backdrop-blur,
        which would trap a `fixed` child inside the header's box.
      */}
      <div
        inert={!isOpen}
        className={`fixed inset-0 z-60 lg:hidden transition-[visibility] duration-300 motion-reduce:transition-none ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop: tap outside to close */}
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className={`absolute inset-0 bg-gray-950/40 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <aside
          id="mobile-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top row */}
          <div className="flex h-18 shrink-0 items-center justify-between border-b border-gray-200/80 px-5">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 rounded-lg no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233dff]"
              aria-label="VS Projects home"
            >
              <img
                src={logo}
                alt=""
                width={32}
                height={32}
                className="shrink-0 object-contain"
              />
              <span className="text-base font-bold tracking-tight text-gray-950">
                VS Projects
              </span>
            </NavLink>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="inline-flex size-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233dff]"
              aria-label="Close navigation"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-lg"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Links */}
          <nav
            className="flex-1 overflow-y-auto px-4 py-5"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={closeMenu}
                  className={sidebarLink}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-[#233dff]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 px-1">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="main-btn m-0! inline-flex w-full items-center justify-center gap-2 text-center"
              >
                Let's Connect
                <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </NavLink>
            </div>
          </nav>

          {/* Socials */}
          <div className="shrink-0 border-t border-gray-200/80 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <p className="mb-2 text-sm font-medium text-gray-500">
              Find me on
            </p>
            <SocialLinks
              className="gap-2"
              buttonClassName="size-11 border border-gray-200 text-xl"
            />
          </div>
        </aside>
      </div>
    </>
  );
}
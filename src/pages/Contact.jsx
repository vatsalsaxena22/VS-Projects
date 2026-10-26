import ContactForm from "../components/ContactForm";
import teamCollaboration from "../assets/svg/team-collaboration.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faComments,
  faBriefcase,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: faWhatsapp,
    url: "https://wa.me/919956304705",
    color: "#25D366",
    name: "WhatsApp",
  },
  {
    icon: faGithub,
    url: "https://github.com/vatsalsaxena22",
    color: "#181717",
    name: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/vatsalsaxena/",
    color: "#0077B5",
    name: "LinkedIn",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/vatsal.saxena/",
    color: "#E1306C",
    name: "Instagram",
  },
];

const opportunities = [
  "Freelance Projects",
  "Full-Stack Development",
  "Frontend Development",
];

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* HERO */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
            <FontAwesomeIcon icon={faComments} aria-hidden="true" />
            Let's Connect
          </span>

          <h1 className="display-title mb-5">
            Let's Build Something{" "}
            <span className="display-title__accent">Amazing Together.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Have a project idea, collaboration opportunity, or just want to say
            hello? Let's talk about what we can build together.
          </p>
        </div>

        {/* CONTACT LAYOUT */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: CONTACT INFO */}
          <aside className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 lg:p-10">
              {/* Decoration */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-blue-100/70 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
                  <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
                  Social Links
                </span>

                <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                  Follow My Journey
                </h2>

                <p className="leading-7 text-gray-600">
                  Explore my projects, development updates, and professional
                  journey across these platforms.
                </p>
              </div>

              {/* SOCIAL LINKS */}
              <div className="relative my-8 flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    title={social.name}
                    className="group relative flex size-12 items-center justify-center
                    overflow-hidden rounded-2xl border border-gray-200/80
                    bg-white text-lg shadow-sm
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:border-transparent
                    hover:shadow-[0_8px_24px_rgba(35,61,255,0.12)]
                    focus-visible:outline-2 focus-visible:outline-offset-4
                    focus-visible:outline-[#233DFF]"
                    style={{
                      "--social-color": social.color,
                    }}
                  >
                    {/* Hover background */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl opacity-0
          transition-opacity duration-300 group-hover:opacity-10"
                      style={{ backgroundColor: social.color }}
                    />

                    <FontAwesomeIcon
                      icon={social.icon}
                      aria-hidden="true"
                      className="relative z-10 transition-transform duration-300
          group-hover:scale-110"
                      style={{ color: social.color }}
                    />
                  </a>
                ))}
              </div>

              <img
                src={teamCollaboration}
                alt="Illustration of people collaborating on a digital project"
                loading="lazy"
                decoding="async"
                className="mx-auto my-1 h-40 w-full max-w-xs object-contain"
              />

              {/* AVAILABILITY CARD */}
              <div className="relative mt-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#233DFF]">
                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-950">Available For</h3>
                    <p className="text-xs text-gray-500">
                      Let's create something useful.
                    </p>
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {opportunities.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mt-1 shrink-0 text-[#233DFF]"
                      aria-hidden="true"
                    />
                    Business websites & e-commerce
                  </li>
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mt-1 shrink-0 text-[#233DFF]"
                      aria-hidden="true"
                    />
                    Dashboards & web applications
                  </li>
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mt-1 shrink-0 text-[#233DFF]"
                      aria-hidden="true"
                    />
                    Startup & product collaborations
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="h-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-7">
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
                  <FontAwesomeIcon icon={faComments} aria-hidden="true" />
                  Contact Me
                </span>

                <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                  Send Me a Message
                </h2>

                <p className="leading-7 text-gray-600">
                  Tell me a little about your idea, project, or requirements.
                  I'll get back to you as soon as I can.
                </p>
              </div>

              <ContactForm />

              {/* RESPONSE NOTE */}
              <div className="mt-7 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mt-1 shrink-0 text-[#233DFF]"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-gray-500">
                  I aim to respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

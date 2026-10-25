import ContactForm from "../components/ContactForm";

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
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
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
    icon: faFacebook,
    url: "https://www.facebook.com/vatsalya.saxena.3/",
    color: "#1877F2",
    name: "Facebook",
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
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* HERO */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
            <FontAwesomeIcon icon={faComments} aria-hidden="true" />
            Let's Connect
          </span>

          <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="block text-[#233DFF]">
              Amazing Together.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Have a project idea, collaboration opportunity, or just want
            to say hello? Let's talk about what we can build together.
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
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    aria-hidden="true"
                  />
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
              <div className="relative my-8 grid grid-cols-4 gap-3 sm:max-w-sm">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    title={social.name}
                    className="flex aspect-square items-center justify-center rounded-2xl border border-gray-200 bg-white text-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF]"
                    style={{ color: social.color }}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>

              {/* AVAILABILITY CARD */}
              <div className="relative mt-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#233DFF]">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-950">
                      Available For
                    </h3>
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
            <div className="h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-7">
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233DFF]">
                  <FontAwesomeIcon
                    icon={faComments}
                    aria-hidden="true"
                  />
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
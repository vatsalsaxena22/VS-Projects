
import ContactForm from "../components/ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
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

export default function Contact() {
  return (
    <section className="contact-page bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* HERO */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="main-badge mb-4 inline-block">
            Let's Connect
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's Build Something Amazing Together
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Have a project idea, collaboration opportunity,
            or just want to say hello? Feel free to reach out.
            I'm always open to discussing new ideas and modern web experiences.
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <div className="contact-info-card flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              <div className="mb-6">
                <span className="main-badge mb-4 inline-block">
                  Social Links
                </span>

                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  Follow My Journey
                </h2>

                <p className="leading-7 text-gray-600">
                  Stay connected and explore my latest projects,
                  updates, and development work across different platforms.
                </p>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mb-8 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    title={social.name}
                    className="flex size-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xl transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233dff]"
                    style={{ color: social.color }}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>

              {/* EXTRA CARD */}
              <div className="mt-auto rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  Available For
                </h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="main-badge">Freelance</span>
                  <span className="main-badge">Full-Stack Projects</span>
                  <span className="main-badge">Frontend Development</span>
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  Open to startup collaborations, business websites,
                  dashboards, and modern web applications.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">
            <div className="contact-form-card h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              <div className="mb-6">
                <span className="main-badge mb-4 inline-block">
                  Contact Me
                </span>

                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  Send Me a Message
                </h2>

                <p className="leading-7 text-gray-600">
                  Fill out the form below and I'll get back to you
                  as soon as possible.
                </p>
              </div>

              <ContactForm />

              {/* BOTTOM NOTE */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  aria-hidden="true"
                />
                Usually responds within 24 hours
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

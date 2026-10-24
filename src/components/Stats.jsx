import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faCode,
  faCalendarCheck,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";
import skills from "../data/skills";

const getDaysOfExperience = () => {
  const startDate = Date.UTC(2023, 9, 1);
  const now = new Date();

  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.floor((today - startDate) / 86400000);
};

const stats = [
  {
    end: projects.length,
    suffix: "+",
    label: "Projects Completed",
    icon: faFolderOpen,
  },
  {
    end: skills.length,
    suffix: "+",
    label: "Programming Skills",
    icon: faCode,
  },
  {
    end: getDaysOfExperience(),
    suffix: "+",
    label: "Days Since My Journey Began",
    icon: faCalendarCheck,
  },
  {
    end: 100,
    suffix: "%",
    label: "Passion for Development",
    icon: faBolt,
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="main-badge mb-4 inline-block">My Journey</span>

          <h2 className="mb-4 text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl">
            Numbers That Reflect My Growth
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            A quick overview of my experience, technical skills, and development
            journey as a full-stack web developer.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map(({ end, suffix, label, icon }) => (
            <div
              key={label}
              className="flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-7"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#233dff]/10 text-[#233dff] sm:size-17.5">
                <FontAwesomeIcon
                  icon={icon}
                  className="text-2xl sm:text-[28px]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-2 text-3xl font-bold tracking-tight text-main sm:text-4xl">
                {inView ? (
                  <CountUp
                    end={end}
                    suffix={suffix}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  "0"
                )}
              </h3>

              <p className="mb-0 text-sm leading-6 font-medium text-gray-600 sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

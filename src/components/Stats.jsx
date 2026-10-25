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

  const today = Date.UTC(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  return Math.floor((today - startDate) / 86400000);
};

const stats = [
  {
    end: projects.length,
    suffix: "+",
    label: "Projects",
    description: "Ideas brought to life",
    icon: faFolderOpen,
  },
  {
    end: skills.length,
    suffix: "+",
    label: "Technologies & Skills",
    description: "Tools in my developer toolkit",
    icon: faCode,
  },
  {
    end: getDaysOfExperience(),
    suffix: "+",
    label: "Days of Building",
    description: "Since October 2023",
    icon: faCalendarCheck,
  },
  {
    end: 100,
    suffix: "%",
    label: "Passion for Development",
    description: "Driven by curiosity",
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
      className="relative overflow-hidden border-y border-gray-100 bg-gray-50/70 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#233dff]">
            <span className="size-1.5 rounded-full bg-[#233dff]" />
            MY JOURNEY
          </span>

          <h2 className="display-title mb-5">
            A little progress,
            <span className="display-title__accent"> a lot of learning.</span>
          </h2>

          <p className="mx-auto max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Every project is another opportunity to learn,
            experiment, and turn ideas into something real.
            Here's a snapshot of my journey so far.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map(
            ({ end, suffix, label, description, icon }, index) => (
              <div
                key={label}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(35,61,255,0.07)] sm:p-7"
              >
                {/* TOP ROW */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#233dff] transition-transform duration-300 group-hover:scale-105">
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-xl"
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-gray-300">
                    0{index + 1}
                  </span>
                </div>

                {/* VALUE */}
                <div
                  className="mb-2 text-4xl leading-none font-bold tracking-tight text-gray-950 sm:text-5xl"
                  aria-label={`${end}${suffix} ${label}`}
                >
                  <span className="text-[#233dff]">
                    {inView ? (
                      <CountUp
                        end={end}
                        suffix={suffix}
                        duration={2.5}
                        separator=","
                        enableScrollSpy={false}
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                </div>

                {/* LABEL */}
                <h3 className="mb-2 text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
                  {label}
                </h3>

                <p className="mt-auto mb-0 text-sm leading-6 text-gray-500">
                  {description}
                </p>

                {/* BOTTOM ACCENT */}
                <div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-[#233dff] transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            )
          )}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-6 text-center text-xs leading-5 text-gray-400">
          A growing collection of projects, experiments, and lessons.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  CodeSlash,
  Folder2Open,
  CalendarCheck,
  LightningCharge,
} from "react-bootstrap-icons";

import projects from "../data/projects";
import skills from "../data/skills";

const getNumOfProjects = () => {
  return projects.length;
};

const getNumOfSkills = () => {
  return skills.length;
};

const getDaysOfExperience = () => {
  const startDate = new Date("2023-10-01");
  const today = new Date();

  const diffTime = today - startDate;

  const diffDays = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  return diffDays;
};

const stats = [
  {
    end: getNumOfProjects(),
    suffix: "+",
    label: "Projects Completed",
    icon: <Folder2Open />,
  },
  {
    end: getNumOfSkills(),
    suffix: "+",
    label: "Programming Skills",
    icon: <CodeSlash />,
  },
  {
    end: getDaysOfExperience(),
    suffix: "+",
    label: "Days of Experience",
    icon: <CalendarCheck />,
  },
  {
    end: 100,
    suffix: "%",
    label: "Passion for Development",
    icon: <LightningCharge />,
  },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className="py-5 py-lg-6 bg-light position-relative overflow-hidden"
      ref={ref}
    >

      <div className="container">

        {/* SECTION HEADER */}
        <div className="row justify-content-center text-center mb-5">

          <div className="col-lg-7">

            <span className="main-badge mb-3 d-inline-block">
              My Journey
            </span>

            <h2 className="fw-bold display-6 mb-3">
              Numbers That Reflect My Growth
            </h2>

            <p className="text-body-secondary fs-5">
              A quick overview of my experience,
              technical skills, and development journey
              as a full-stack web developer.
            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="row g-4">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-6 col-lg-3"
            >

              <div
                className="
                  bg-white
                  border
                  rounded-4
                  shadow-sm
                  h-100
                  p-4
                  text-center
                  position-relative
                "
              >

                {/* ICON */}
                <div
                  className="
                    d-inline-flex
                    align-items-center
                    justify-content-center
                    bg-main
                    bg-opacity-10
                    text-light
                    rounded-4
                    mb-4
                  "
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "1.8rem",
                  }}
                >
                  {stat.icon}
                </div>

                {/* NUMBER */}
                <h2 className="fw-bold display-6 mb-2 stats">

                  {inView && (
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={3}
                    />
                  )}

                </h2>

                {/* LABEL */}
                <p className="text-body-secondary mb-0 fw-medium">
                  {stat.label}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;
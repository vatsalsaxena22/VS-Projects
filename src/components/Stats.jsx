import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import projects from "../data/projects";
import skills from '../data/skills';

const getNumOfProjects = ()=>{
  return projects.length;
}

const getNumOfSkills = ()=>{
  return skills.length;
}

const getDaysOfExperience = () => {
  const startDate = new Date('2023-10-01');
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const stats = [
  { end: getNumOfProjects(), suffix: '+', label: 'Projects Completed' },
  { end: getNumOfSkills(), suffix: '+', label: 'Programming Skills' },
  { end: getDaysOfExperience(), suffix: '+', label: 'Days of Experience' },
  { end: 100, suffix: '%', label: 'Passion for Web Development' },
];

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-5 bg-light text-center" ref={ref}>
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 stats">
              <h2 className="fw-bold">
                {inView && (
                  <CountUp end={stat.end} suffix={stat.suffix} duration={3} />
                )}
              </h2>
              <p className="mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

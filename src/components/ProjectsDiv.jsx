import React from "react";
import ProjectsCard from "./ProjectsCard";

const ProjectsDiv = () => {
  return (
    <div>
      <div className="bg-primary p-2 text-light text-center">
        <h1>There was a long journey and still going on....</h1>
      </div>
      <div className="p-5 text-center">
        <h2>
          This website includes all my Projects. For the convenience of the
          visitors, Projects are divided into these divisions, based on the
          technologies.
        </h2>
      </div>
      <div className="project-flex p-2 pb-5">
        <ProjectsCard />
      </div>
    </div>
  );
};

export default ProjectsDiv;

import React from "react";
import HtmlCssCard from "./HtmlCssCard";

const HtmlCss = () => {

  return (
    <div>
      <h1 className="display-4 text-center text-light p-5 html-css">
        HTML & CSS Projects
      </h1>
      <div className="flex p-5">
        <HtmlCssCard />
      </div>
    </div>
  );
};

export default HtmlCss;
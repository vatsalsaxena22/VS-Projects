import React from "react";
import JsCard from "./JsCard";

const Js = () => {
  return (
    <div>
      <h1 className="display-4 text-center text-black p-5 js">
        JavaScript Projects
      </h1>
      <div className="flex p-5">
        <JsCard />
      </div>
    </div>
  );
};

export default Js;

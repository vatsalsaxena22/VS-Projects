import React from "react";
import HtmlCssImg from "../../assets/images/html-css.jpg";
import JsImg from "../../assets/images/js.jpg";
import ReactImg from "../../assets/images/react.jpeg";
import MERN from '../../assets/images/MERN.png';
import { Link } from "react-router-dom";

const ProjectsCard = () => {
  let arr = [
    {
      name: "HTML & CSS",
      image: HtmlCssImg,
      url: "/html-css",
    },
    {
      name: "JavaScript",
      image: JsImg,
      url: "/js",
    },
    {
      name: "React.js",
      image: ReactImg,
      url: "/react",
    },
    {
      name: "MERN Stack",
      image: MERN,
      url: "/mern",
    },
  ];

  return (
    <>
      {arr.map((item, index) => {
        return (
          <div className="card home-card" key={index}>
            <img className="card-img-top" src={item.image} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">All {item.name} projects.</p>
              <Link to={item.url} className="btn btn-primary">
                View Projects
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsCard;

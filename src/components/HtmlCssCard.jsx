import React, { useState } from "react";
import Alphabet1 from "../../assets/project images/Alphabet v1.0.png";
import Alphabet2 from "../../assets/project images/Alphabet v2.0.png";
import FirstSchool from "../../assets/project images/First School.png"
import NcertBooks from "../../assets/project images/NCERT Clone.png"
import Netflix from "../../assets/project images/Netflix Clone.png"

const HtmlCssCard = () => {
  let [arr, setArr] = useState([
    {
      name: "Alphabet Website v1.0",
      image: Alphabet1,
      url: "https://alphabet-vs.netlify.app/",
    },
    {
      name: "Alphabet Website v2.0",
      image: Alphabet2,
      url: "https://alphabet-v2.netlify.app/",
    },
    {
      name: "First School Website",
      image: FirstSchool,
      url: "https://firstschool.netlify.app/",
    },
    {
      name: "NCERT Books Webpage Clone",
      image: NcertBooks,
      url: "https://vatsalsaxena22.github.io/myPortfolio/projects/NCERT%20Clone/",
    },
    {
      name: "Netflix Homepage Clone (For Desktop)",
      image: Netflix,
      url: "https://vatsalsaxena22.github.io/myPortfolio/projects/Netflix%20Clone/",
    },
  ]);

  return (
    <>
      {arr.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <p className="card-text">{item.name}</p>
              <a href={item.url} target="_blank" className="btn btn-primary">
                Open Project
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HtmlCssCard;

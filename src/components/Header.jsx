import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [list, setList] = useState([
    { 
      route: "/",
      value: "Home",
      index: 0,
    },
    {
      route: "/html-css",
      value: "HTML & CSS",
      index: 1,
    },
    {
      route: "/js",
      value: "JavaScript",
      index: 2,
    },
    {
      route: "/react",
      value: "React.js",
      index: 3,
    },
    {
      route: "/mern",
      value: "MERN Stack",
      index: 4,
    },
  ]);
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <header className="sticky-top bg-light">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link onClick={() => setMainIndex(0)} className="main-title navbar-brand text-primary" to={"/"}>
            VS Projects
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {list.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    onClick={() => setMainIndex(index)}
                    className={
                      index == mainIndex
                        ? "nav-link active border-bottom border-dark"
                        : "nav-link"
                    }
                    aria-current="page"
                    to={item.route}
                  >
                    {item.value}
                  </Link>
                </li>
              ))}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Websites
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="https://vatsalsaxena22.github.io/myPortfolio/"
                    target="_blank"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://vatsalsaxena.w3spaces.com/"
                    target="_blank"
                    >
                      CV
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://alphabet-v2.netlify.app/"
                    target="_blank">
                      Alphabet
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://firstschool.netlify.app/"
                    target="_blank">
                      First School
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

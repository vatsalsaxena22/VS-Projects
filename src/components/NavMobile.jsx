import React from 'react'
import { Link } from 'react-router-dom';

const NavMobile = () => {

    const navArr = [
        {
          value: "Home",
          route: "/",
        },
        {
          value: "HTML & CSS",
          route: "/html-css",
        },
        {
          value: "JavaScript",
          route: "/js",
        },
        {
          value: "React.js",
          route: "/react",
        },
        {
          value: "MERN Stack",
          route: "/mern",
        },
      ];
    
      const dropdownArr = [
        {
          value: "Portfolio",
          route: "https://vatsalsaxena22.github.io/myPortfolio/",
        },
        {
          value: "CV",
          route: "https://vatsalsaxena.w3spaces.com/",
        },
        {
          value: "Alphabet v2.0",
          route: "https://alphabet-v2.netlify.app/",
        },
        {
          value: "First School",
          route: "https://firstschool.netlify.app/",
        },
      ];

  return (
        <nav className="navbar navbar-expand-lg d-no">
        <div className="container">
          <Link className="main-title navbar-brand text-primary" to={"/"}>
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
              {navArr.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={"nav-link"}
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
                  {dropdownArr.map((item, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href={item.route}
                        target="_blank"
                      >
                        {item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavMobile
import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 bg-primary text-white">
      <h4>Vatsal Saxena's</h4>
      <h1 className="pb-3">Projects Website</h1>
      <div className="d-flex flex-wrap justify-content-between mb-2">
        <div>
          <h4 className="pb-3 border-bottom">About</h4>
          <p>
            <i className="fa-solid fa-user"></i> Developer -&nbsp;
            <span>
              <a
                href="https://vatsalsaxena22.github.io/myPortfolio/"
                target="_blank"
              >
                Vatsal Saxena
              </a>
            </span>
          </p>
          <p>
            <i className="fa-bootstrap fa-brands"></i> Framework -&nbsp;
            <span>
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap 5
              </a>
            </span>
          </p>
          <p>
            <i className="fa-react fa-brands"></i> Library -&nbsp;
            <span>
              <a href="https://react.dev/" target="_blank">
                React.js
              </a>
            </span>
          </p>
          <p>
            <i className="fa-solid fa-font-awesome"></i> Icons -&nbsp;
            <span>
              <a href="https://fontawesome.com/" target="_blank">
                Font Awesome
              </a>
            </span>
          </p>
          <p>
            <i className="fa-solid fa-server"></i> Hosting -&nbsp;
            <span>
              <a href="https://netlify.com/" target="_blank">
                Netlify App
              </a>
            </span>
          </p>
        </div>
        <div>
          <h5 className="pb-3 border-bottom">Portfolio/CV Links</h5>
          <p>
            <a
              href="https://vatsalsaxena22.github.io/myPortfolio/"
              target="_blank"
            >
              Portfolio
            </a>
          </p>
          <p>
            <a href="https://vatsalsaxena.w3spaces.com/" target="_blank">
              CV
            </a>
          </p>
        </div>
        <div>
          <h5 className="pb-3 border-bottom">Contact Links</h5>
          <p>
            <i className="fa-github fa-brands"></i>
            &nbsp;
            <a href="https://github.com/vatsalsaxena22/" target="_blank">
             Github
            </a>
          </p>
          <p>
            <i className="fa-linkedin fa-brands"></i>
            &nbsp;
            <a href="https://linkedin.com/in/vatsalsaxena" target="_blank">
              Linkedin
            </a>
          </p>
        </div>
        <div>
          <h5 className="pb-3 border-bottom">Other Website Links</h5>
          <p>
            <a href="https://alphabet-v2.netlify.app/" target="_blank">
              Alphabet Website
            </a>
          </p>
          <p>
            <a href="https://firstschool.netlify.app/" target="_blank">
              First School Website
            </a>
          </p>
        </div>
      </div>
      <p>All Right Reserved | VS Projects &copy; 2024.</p>
    </footer>
  );
};

export default Footer;

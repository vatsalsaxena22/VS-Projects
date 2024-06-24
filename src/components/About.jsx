import React from "react";
import proImg from "../../assets/images/pro.jpg"

const About = () => {
  return (
    <>
      <div className="info-code mt-2 p-5 bg-light text-dark">
        <div>
          <h2>From the first project (Hello World!)</h2>
          <p>Nothing, just a simple html file.</p>
        </div>
        <div className="code bg-black text-success rounded p-2">
          <p>HTML Code:</p>
          <code>
            &lt;html&gt;
            <br />
            &lt;head&gt;....&lt;/head&gt;
            <br />
            &lt;body&gt;
            <br />
            &nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;
            <br />
            &lt;/body&gt;
            <br />
            &lt;/html&gt;
          </code>
          <br />
          <p>Output:</p>
          <mark>Hello World!</mark>
        </div>
      </div>
      <div className="info-pro mt-2 p-5 bg-light text-dark">
        <img
          className="rounded website-img img-fluid"
          src={proImg}
          alt="this site"
        />
        <div>
          <h2>To this Website (My Projects)</h2>
          <p>Developed with clean codes, Designed beautifully.</p>
          <p>Technologies Used-</p>
          <ul className="sq-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap 5 Framework</li>
            <li>React.js Library</li>
            <li>Font Awesome Icons</li>
            <li>Google Fonts</li>
            <li>Netlify Hosting</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;

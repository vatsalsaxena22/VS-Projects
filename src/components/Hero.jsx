import { ArrowRight, CodeSlash, Stars, Layers } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

import heroImg from "../assets/programming.svg";

export default function Hero() {
  const technologies = ["React.js", "Node.js", "PHP", "Bootstrap"];

  return (
    <section className="position-relative overflow-hidden bg-body">
      <div className="container py-5 lg:py-5">
        <div className="row align-items-center g-5 lg:g-5">

          {/* LEFT CONTENT */}
          <div className="col-12 lg:col-6">
            <div className="text-center lg:text-start">

              {/* BADGE */}
              <div className="d-inline-flex align-items-center gap-2 rounded-pill border px-3 py-2 mb-4 bg-body">
                <Stars size={15} className="text-primary" />
                <span className="small fw-semibold text-body">
                  Ideas. Experiments. Creations.
                </span>
              </div>

              {/* HEADING */}
              <h1 className="display-2 fw-bold lh-1 mb-4">
                Building
                <br />
                <span className="text-primary">
                  Digital Ideas.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="fs-5 text-body-secondary lh-lg mb-4 mx-auto lg:mx-0">
                Welcome to VS Projects — my digital playground
                for building modern websites, powerful applications,
                and creative web experiences.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap justify-content-center lg:justify-content-start gap-3 mb-5">

                <NavLink
                  to="/projects"
                  className="btn theme-primary btn-lg rounded-pill px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  Explore Projects
                  <ArrowRight size={18} />
                </NavLink>

                <NavLink
                  to="/about"
                  className="btn theme-neutral btn-lg rounded-pill px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <CodeSlash size={18} />
                  About Me
                </NavLink>

              </div>

              {/* TECHNOLOGIES */}
              <div>
                <div className="d-flex align-items-center justify-content-center lg:justify-content-start gap-2 mb-3">
                  <span className="small fw-bold text-body-secondary text-uppercase">
                    Built with
                  </span>
                  <span className="border-top flex-grow-1" style={{ maxWidth: "50px" }} />
                </div>

                <div className="d-flex flex-wrap justify-content-center lg:justify-content-start gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="badge rounded-pill border bg-body text-body-secondary px-3 py-2 fw-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-12 lg:col-6">
            <div className="position-relative mx-auto" style={{ maxWidth: "600px" }}>

              {/* VISUAL FRAME */}
              <div className="position-relative overflow-hidden rounded-5 border bg-body-tertiary p-3 sm:p-4 lg:p-5">

                {/* DECORATIVE SHAPES */}
                <div
                  className="position-absolute top-0 end-0 translate-middle rounded-circle bg-primary opacity-10"
                  style={{ width: "240px", height: "240px" }}
                  aria-hidden="true"
                />

                <div
                  className="position-absolute bottom-0 start-0 translate-middle rounded-circle bg-primary opacity-10"
                  style={{ width: "200px", height: "200px" }}
                  aria-hidden="true"
                />

                {/* TOP LABEL */}
                <div className="position-relative d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="d-inline-flex align-items-center gap-2 small fw-semibold text-body">
                    <Layers size={16} className="text-primary" />
                    THE CREATIVE LAB
                  </span>

                  <Stars size={20} className="text-primary" />
                </div>

                {/* ILLUSTRATION */}
                <div className="position-relative text-center">
                  <img
                    src={heroImg}
                    alt="Programming and web development illustration"
                    fetchPriority="high"
                    className="img-fluid"
                    style={{
                      maxHeight: "410px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* BOTTOM INFO CARD */}
                <div className="position-relative rounded-4 border bg-body p-3 sm:p-4 shadow-sm">
                  <div className="d-flex align-items-center gap-3">

                    <div className="rounded-3 bg-primary-subtle text-primary p-3 d-flex align-items-center justify-content-center">
                      <CodeSlash size={24} />
                    </div>

                    <div>
                      <div className="fw-bold text-body">
                        Think. Build. Create.
                      </div>
                      <div className="small text-body-secondary">
                        Turning concepts into experiences.
                      </div>
                    </div>

                    <div className="ms-auto d-none sm:d-block">
                      <ArrowRight size={20} className="text-primary" />
                    </div>

                  </div>
                </div>

              </div>

              {/* CAPTION */}
              <div className="d-flex justify-content-center lg:justify-content-end mt-3">
                <span className="small text-body-secondary">
                  <span className="fw-bold text-primary">VS</span>
                  {" "}Projects / Personal portfolio
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

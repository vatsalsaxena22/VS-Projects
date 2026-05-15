import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import {
  PersonWorkspace,
  CodeSlash,
  LightningCharge,
} from "react-bootstrap-icons";

import myPic from "../assets/Profile.jpg";

import VSTrio from "../components/VSTrio";

import skills from "../data/skills";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 py-lg-6 bg-white"
    >

      <Container>

        {/* HERO */}
        <Row className="justify-content-center text-center mb-5">

          <Col lg={8}>

            <span className="main-badge mb-3 d-inline-flex align-items-center gap-2">
              <PersonWorkspace size={14} />
              About Me
            </span>

            <h1 className="fw-bold display-5 mb-3">
              Full-Stack Developer
            </h1>

            <p className="text-body-secondary fs-5">
              Passionate about building modern,
              scalable, and visually engaging
              digital experiences with clean
              UI/UX and efficient development practices.
            </p>

          </Col>

        </Row>

        {/* MAIN CARD */}
        <div
          className="
            bg-light
            border
            rounded-5
            p-4
            p-lg-5
            shadow-sm
          "
        >

          <Row className="align-items-center g-5">

            {/* IMAGE */}
            <Col
              lg={4}
              className="text-center"
            >

              <div className="position-relative d-inline-block">

                <div
                  className="
                    position-absolute
                    top-50
                    start-50
                    translate-middle
                  "
                  style={{
                    width: "260px",
                    height: "260px",
                    filter: "blur(30px)",
                  }}
                />

                <Image
                  src={myPic}
                  roundedCircle
                  fluid
                  alt="Vatsal Saxena"
                  className="
                    border
                    border-4
                    border-white
                    
                    position-relative
                  "
                  style={{
                    width: "230px",
                    height: "230px",
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />

              </div>

            </Col>

            {/* CONTENT */}
            <Col lg={8}>

              <div className="d-flex align-items-center gap-2 mb-3">

                <div
                  className="
                    bg-main
                    bg-opacity-10
                    text-light
                    rounded-4
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "1.4rem",
                  }}
                >
                  <CodeSlash />
                </div>

                <div>
                  <h2 className="fw-bold mb-0">
                    I'm Vatsal Saxena
                  </h2>

                  <p className="text-muted mb-0">
                    Full-Stack Web Developer
                  </p>
                </div>

              </div>

              {/* DESCRIPTION */}
              <p className="text-body-secondary fs-5 lh-lg mb-4">
                I'm a passionate full-stack developer
                focused on building modern, responsive,
                and high-performance web applications.
                I enjoy transforming ideas into elegant,
                scalable digital experiences using clean
                frontend architecture and efficient backend solutions.
              </p>

              {/* SKILLS */}
              <div className="mb-4">

                <div className="d-flex align-items-center gap-2 mb-3">

                  <LightningCharge className="text-main" />

                  <h5 className="fw-bold mb-0">
                    Skills & Technologies
                  </h5>

                </div>

                <div className="d-flex flex-wrap gap-2">

                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="main-badge"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </Col>

          </Row>

        </div>

        {/* DIVIDER */}
        <div className="my-5 border-top"></div>

        {/* VS TRIO */}
        <Row className="justify-content-center text-center mb-5">

          <Col lg={7}>

            <span className="main-badge mb-3 d-inline-block">
              My Ecosystem
            </span>

            <h2 className="fw-bold display-6 mb-3">
              My Tech Trio
            </h2>

            <p className="text-body-secondary fs-5">
              A collection of platforms and projects
              representing my work, portfolio,
              and development journey.
            </p>

          </Col>

        </Row>

        <VSTrio />

      </Container>

    </section>
  );
}
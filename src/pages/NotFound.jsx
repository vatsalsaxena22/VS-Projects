import React from "react";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import {
  ExclamationTriangle,
  ArrowLeft,
} from "react-bootstrap-icons";

import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="
        min-vh-100
        d-flex
        align-items-center
        justify-content-center
        py-5
        bg-light
      "
    >

      <Container>

        <Row className="justify-content-center">

          <Col lg={7}>

            <div
              className="
                bg-white
                border
                rounded-5
                shadow-sm
                p-4
                p-lg-5
                text-center
              "
            >

              {/* ICON */}
              <div
                className="
                  mx-auto
                  mb-4
                  d-flex
                  align-items-center
                  justify-content-center
                  rounded-circle
                  bg-main
                  bg-opacity-10
                  text-light
                "
                style={{
                  width: "90px",
                  height: "90px",
                  fontSize: "2rem",
                }}
              >
                <ExclamationTriangle />
              </div>

              {/* 404 */}
              <h1
                className="
                  display-1
                  fw-bold
                  text-main
                  mb-3
                "
              >
                404
              </h1>

              {/* TITLE */}
              <h2 className="fw-bold mb-3">
                Page Not Found
              </h2>

              {/* DESCRIPTION */}
              <p className="text-body-secondary fs-5 mb-4">
                The page you are looking for
                might have been removed,
                renamed, or does not exist.
              </p>

              {/* BUTTON */}
              <NavLink
                to="/"
                className="
                  main-btn
                  btn-white
                  d-inline-flex
                  align-items-center
                  gap-2
                "
              >
                <ArrowLeft size={16} />
                Back to Home
              </NavLink>

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default NotFound;
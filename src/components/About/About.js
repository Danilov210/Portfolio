import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <Row className="justify-content-center py-4">
          <Col md={7} className="d-flex flex-column justify-content-center pb-4">
            <h1 className="section-title">
              Who <strong className="purple">I Am</strong>
            </h1>
            <AboutCard />
          </Col>

          <Col md={5} className="about-img d-flex align-items-center justify-content-center pb-4 pt-md-5">
            <img
              src={laptopImg}
              alt="About section illustration"
              className="img-fluid"
              style={{ maxHeight: "320px" }}
            />
          </Col>
        </Row>

        <h1 className="project-heading mt-5">
          Core <strong className="purple">Technologies</strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;

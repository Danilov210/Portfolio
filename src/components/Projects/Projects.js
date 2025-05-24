import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import root from "../../Assets/Projects/root.png";
import lottery_project from "../../Assets/Projects/lottery_project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a couple of projects I've built and contributed to.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lottery_project} // using existing image
              title="Miracle of Luck (Online Lottery)"
              description="A full-stack online lottery platform built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can create, manage, and participate in lotteries efficiently. Includes real-time updates, ticket validation, and admin control."
              ghLink="https://github.com/Danilov210/Miracle-of-Luck"
              demoLink="https://miracle-of-luck.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={root} // using existing image
              title="Polynomial Root Finder"
              description="A Python program that calculates polynomial roots using Newton-Raphson and Bisection methods. Focused on numerical accuracy and performance, matching results with NumPy's algorithms."
              ghLink="https://github.com/Danilov210/Polynomial-Roots-Finder"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

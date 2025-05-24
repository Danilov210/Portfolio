import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title || "project preview"}
        className="project-card-image"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        <div className="d-flex flex-wrap mt-3">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 mb-2"
              aria-label="View source code on GitHub"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
              aria-label="View live demo"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

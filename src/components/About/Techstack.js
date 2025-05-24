import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiSwagger,
  SiDocker,
  SiAmazonaws,
  SiKubernetes,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiWindows,
} from "react-icons/si";
import { FaGithub, FaTerminal } from "react-icons/fa";
import { RiStackshareLine } from "react-icons/ri";

const techIcons = [
  { icon: DiPython, label: "Python" },
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: DiJava, label: "Java" },
  { icon: FaTerminal, label: "Bash / CLI" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: DiReact, label: "React" },
  { icon: DiNodejs, label: "Node.js" },
  { icon: SiSwagger, label: "Swagger" },
  { icon: DiMongodb, label: "MongoDB" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: DiGit, label: "Git" },
  { icon: FaGithub, label: "GitHub" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiAmazonaws, label: "AWS" },
  { icon: SiKubernetes, label: "Kubernetes" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiWindows, label: "Windows" },
  { icon: RiStackshareLine, label: "Kafka / Messaging" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map(({ icon: Icon, label }, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${idx}`}>{label}</Tooltip>}
          >
            <div>
              <Icon />
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

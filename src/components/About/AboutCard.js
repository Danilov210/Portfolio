import React from "react";
import Card from "react-bootstrap/Card";
import { BiCheckCircle } from "react-icons/bi";

const interests = [
  "Exploring new technologies & tools",
  "Playing games",
  "Building side projects",
  "Learning languages and traveling",
];

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Alexander Danilov</span>, a
            passionate <span className="purple">Back-End Developer</span> based in Israel,
            with a strong foundation in full-stack development.
            <br /><br />
            I hold a B.Sc. in Software Engineering from Israel Braude College and have built
            real-world experience through freelance work and personal projects.
            <br /><br />
            I’m curious by nature, excited by complex challenges, and deeply motivated
            to build software that delivers real value.
            <br /><br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            {interests.map((item, idx) => (
              <li className="about-activity" key={idx}>
                <BiCheckCircle title="Interest icon" style={{ marginRight: "8px" }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Committed to learning, solving problems, and building meaningful software."
          </p>
          <footer className="blockquote-footer">Alexander Danilov</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

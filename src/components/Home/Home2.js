import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m passionate about programming - what began as <span className="purple"> curiosity </span> has evolved
              into a genuine <span className="purple"> love </span> for building and <span className="purple"> solving </span>
              with <span className="purple">code</span>. Along the way, I’ve developed a versatile skill
              set across multiple domains.
              <br />

              <br />I’m fluent in languages like
              <b className="purple"> Python, JavaScript </b>
              , and Bash, and I enjoy crafting robust, scalable solutions using modern web technologies and
              APIs, including <b className="purple"> React, Node.js, Express.js </b>
              , and Swagger for clear, structured documentation.

              <br />
              <br />
              With hands-on experience in <b className="purple"> MongoDB </b> and <b className="purple"> SQL</b>,
              I handle data efficiently, and I work confidently with tools like <b className="purple"> Git</b>,
              <b className="purple"> Docker</b>, and <b className="purple"> AWS</b>, to build and deploy production-ready applications.
              <br />
              <br />
              Whenever possible, I bring <span className="purple"> ideas </span> to <span className="purple">life
              </span> - from backend architecture to polished user interfaces - always with a focus on
              writing <span className="purple"> clean</span>, <span className="purple"> maintainable</span>, and
              <span className="purple"> effective code</span>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b className="purple">FIND </b> ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Danilov210"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alexander-danilov-940591334/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container  >
        <Particle />
        <Container className="home-content">

          <Row>
            <Col md={7} className="home-header mb-4">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm <span className="main-name">Alexander Danilov</span> - welcome to my world of code👨‍💻
              </h1>

              <Type />
            </Col>

            <Col
              md={5}
              className="d-flex align-items-center justify-content-center"
              style={{ paddingTop: 20, paddingBottom: 20 }}          >
              <img
                src={homeLogo}
                alt="Developer illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
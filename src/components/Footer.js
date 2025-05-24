import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: <AiFillGithub />,
    url: "https://github.com/Danilov210",
    label: "GitHub profile",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/alexander-danilov-940591334/",
    label: "LinkedIn profile",
  },
];

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col
          xs={12}
          md={6}
          className="footer-copywright d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0"
        >
          <h3 className="mb-0">Designed and Developed by Alexander Danilov</h3>
        </Col>

        <Col
          xs={12}
          md={6}
          className="footer-body d-flex align-items-center justify-content-center justify-content-md-end"
        >
          <ul className="footer-icons d-flex gap-3 mb-0 ps-0">
            {socialLinks.map(({ url, icon, label }) => (
              <li key={label} className="social-icons">
                <a
                  href={url}
                  aria-label={label}
                  title={label}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

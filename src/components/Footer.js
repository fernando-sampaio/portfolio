import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo (2).png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/fernando-sampaio-624708187/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.behance.net/fernandosampaio3200" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#https://github.com/fernando-sampaio" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
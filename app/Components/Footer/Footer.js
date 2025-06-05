import classes from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className={`${classes.foot}`}>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h6 className={`m-0 ${classes.foottext}`}>
            Copyright © 2025 Puneri Paltan
          </h6>
        </Col>
        <Col className={`d-flex justify-content-center  ${classes.icons}`}>
          <a href="https://www.facebook.com/puneripaltan/" target="_blank" className={classes.si}>
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/puneripaltanofficial/?utm_source=ig_profile_share&igshid=m2wsuxrbs1f8" target="_blank" className={classes.si}>
            <FaInstagram />
          </a>
          <a href="https://x.com/PuneriPaltan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className={classes.si}>
            <FaTwitter />
          </a>
          <a  href="https://www.youtube.com/c/PuneriPaltan" target="_blank" className={classes.si}>
            <FaYoutube />
          </a>
        </Col>
        <Col className="d-flex align-items-center justify-content-center p-0">
          <a href="https://www.digitallatte.in/" target="_blank" className={classes.link}>
            <div className={classes.brand}>
              <div className={classes.manage}>
                <p>Managed</p>
                <p>By</p>
              </div>
              <img className={classes.im} src="/dl_logo.png" />
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

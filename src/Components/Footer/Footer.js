import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="py-3 py-md-5">
        <Col xs={12} sm={4} className="footer__col__1 mb-5">
          <Link className="logo-after" to="/">
            POWER
          </Link>
        </Col>
        <Col xs={6} sm={2} className="footer__col__2">
          <p>Need Help ?</p>
          <p>Help Center</p>
          <p>Email Support</p>
          <p>Live Chat</p>
          <p>Gift Certificate</p>
          <p>Send Us FeedBack</p>
        </Col>
        <Col xs={6} sm={2} className="footer__col__3">
          <p>Digital Resources</p>
          <p>Article</p>
          <p>E-books</p>
        </Col>
        <Col xs={6} sm={2} className="footer__col__4">
          <p>Connect With Us</p>
          <p>Forum</p>
        </Col>
        <Col xs={6} sm={2} className="footer__col__5">
          <p>Join Our Newsletter</p>
          <p>
            Get exclusive news ,feature and update from the shredder weight loss
            academy
          </p>
        </Col>
      </Row>
      <div className="text-center">
      <small > &#169; Shuhin | 2020</small>
      </div>
    </Container>
  );
};

export default Footer;

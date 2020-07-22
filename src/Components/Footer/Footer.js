import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="p-5">
        <Col xs={12} sm={4}>
          <Link className="btn" to="/">
            <h5 className="logo-after">POWER</h5>
          </Link>
        </Col>
        <Col xs={6} sm={2}>
          <p>Need Help ?</p>
          <p>Help Center</p>
          <p>Email Support</p>
          <p>Live Chat</p>
          <p>Gift Certificate</p>
          <p>Send Us FeedBack</p>
        </Col>
        <Col xs={6} sm={2}>
          <p>Digital Resources</p>
          <p>Article</p>
          <p>E-books</p>
        </Col>
        <Col xs={6} sm={2}>
          <p>Connect With Us</p>
          <p>Forum</p>
        </Col>
        <Col xs={6} sm={2}>
          <p>Join Our Newsletter</p>
          <p>
            Get exclusive news ,feature and update from the shredder weight loss
            academy
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

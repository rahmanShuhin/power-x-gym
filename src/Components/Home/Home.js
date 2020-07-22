import React from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container fluid className="px-md-5 home-container px-lg-6">
      <Navigation></Navigation>
      <Row>
        <Col sm={6} className="caption">
          <div>
            <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              quod fugiat libero deserunt temporibus amet vero? Reprehenderit
              nesciunt quae eius consectetur ut soluta in. A aperiam enim
              corrupti dolorum temporibus.
            </p>
          </div>
          <Link className="btn btn-1" to="/class">
            Join Us
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

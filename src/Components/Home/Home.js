import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "./Home.css";
import youtube from "../../Image/youtube.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid className="px-md-5 home-container px-lg-6">
      <Navigation></Navigation>
      <Row className="caption__container">
        <Col lg={7} className="caption">
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
        <Col lg={5} className="video-section">
          <div className="youtube-img" onClick={handleShow} >
            <img src={youtube} alt="youtube" className="img-fluid" />
          </div>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="true"
        centered
      >
       
          <ReactPlayer controls width="100%" height="50vh" playing="true" className="video__player"  url="https://www.youtube.com/watch?v=PXjfecguayM&ab_channel=YoTProductions">
            
          </ReactPlayer>
      </Modal>
    </Container>
  );
};

export default Home;

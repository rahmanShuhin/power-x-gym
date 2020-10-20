import React from "react";
import { Container, Row, Col, Card, Jumbotron, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import boss from "../../Image/boss.jpg";
import yoga from "../../Image/yoga.jpg";
import gym2 from "../../Image/gym2.jpg";
import Group_87 from "../../Image/Group_87.png";
import Group_88 from "../../Image/Group_88.png";
import gift_2 from "../../Image/gift_2.png";
import "./HomeExtra.css";
import { Link } from "react-router-dom";
const HomeExtra = () => {
  return (
    <Container fluid className="py-5">
      <Row className="px-lg-5 px-lg-6 text-center">
        <Col lg={4}>
          <Card className="px-md-2 py-5 home-extra my-2">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faDumbbell} className="dumbbell" />
            </div>
            <h3>PROGRESSION</h3>
            <p className="px-lg-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eveniet quis quam porro possimus incidunt temporibus,
            </p>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="px-lg-2 py-5 home-extra my-2">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon
                icon={faDumbbell}
                className="dumbbell text-warning"
              />
            </div>
            <h3 className="text-warning">WORKOUT</h3>
            <p className="px-lg-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eveniet quis quam porro possimus incidunt temporibus,
            </p>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="px-md-2 py-5 home-extra my-2">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faDumbbell} className="dumbbell" />
            </div>
            <h3>NUTRITION</h3>
            <p className="px-lg-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eveniet quis quam porro possimus incidunt temporibus,
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="px-lg-5 px-lg-6 py-5">
        <Col lg={6} className="py-lg-5 my-lg-5">
          <img src={boss} alt="boss" className="img-fluid boss" />
        </Col>
        <Col lg={6} className="py-lg-5 py-2 my-lg-5 home__extra__text">
          <h2>ABOUT U<span className="s_text">S</span></h2>
          <h4>WE ARE HERE TO DREAM</h4>
          <h4>OUR TEAM IS HERE SERVE YOU. </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            praesentium harum maxime ducimus ad magni suscipit ullam ex
            assumenda! Laudantium in est ratione inventore fugiat quo ipsam
            dicta sequi accusantium.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            praesentium harum maxime ducimus ad magni suscipit ullam ex
            assumenda! Laudantium in est ratione inventore fugiat quo ipsam
            dicta sequi accusantium
          </p>
        </Col>
      </Row>

      <div className="home__extra__h4 text-center">
          <h4>Training</h4>
      </div>
      <Row className="px-lg-5 px-lg-6 pt-5 pt-lg-0">
          <Col lg={6} className="py-lg-5 my-lg-5 yoga__container__1">
              <img src={yoga} alt="me" className="img-fluid"/> 
              <Link className="btn btn-1" to="/schedule/yoga"> Yoga Training Session</Link>         
          </Col>
          <Col lg={6} className="py-md-5 my-md-5 yoga__container__2">
            <img src={gym2} alt="gym" className="img-fluid"/>
            <Link className="btn btn-1" to="/schedule/cardio"> Cardio Training Session</Link>
          </Col>
      </Row>

      <div className="home__choose__h4 text-center">
          <h4>Why</h4>
      </div>

      <Row className="px-lg-5 px-lg-6 py-5">
            <Col lg={4}>
              <Card className="my_card mb-5 mb-lg-0">
                <Card.Img variant="top" src={Group_87} className="img-fluid"/>
                <Card.Body>
                  <Card.Title className="title">FREE FITNESS TRAINING</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="my_card second mb-5 mb-lg-0">
                <Card.Img variant="top" src={Group_88} className="img-fluid"/>
                <Card.Body>
                  <Card.Title className="title">Tons of Cardio And Strength</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="my_card">
                <Card.Img variant="top" src={gift_2} className="img-fluid"/>
                <Card.Body>
                  <Card.Title className="title">No Commitment Membership</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
               
              </Card>
            </Col>
      </Row>

    </Container>
  );
};

export default HomeExtra;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { Data_list } from "../Data_list/Data_list";
import { useParams, Link } from "react-router-dom";
import "./Pricing.css";
const Pricing = (props) => {
  const { key } = useParams();
  const data = Data_list.find((x) => x.key === key);
  //console.log(data);
  return (
    <>
      <Container fluid className="class-container px-md-5 px-lg-6">
        <Navigation></Navigation>
        <div className="price">
          <h2>{data.name}</h2>
        </div>
      </Container>
      <Container fluid className="p-md-5 px-lg-6 my-5">
        <div className="text-center mb-5 price">
          <h2>
            <span className="text-warning">CHOOSE THE OFFER</span> THAT SUITS
            YOU
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            mollitia odit?
          </p>
        </div>
        <Row className="px-xl-5">
          <Col lg={4}>
            <Card className="text-center py-5 card-2 my-3 my-lg-0">
              <p>BILLED MONTHLY</p>
              <h3>ADVANCE PLAN</h3>
              <h2>${data.price.advance}</h2>
              <p>Mobile-Optimized</p>
              <p>Best hosting</p>
              <p>Free Custom</p>
              <p>Outstanding</p>
              <p>Happy Customer</p>
              <Link
                className="btn btn-3 w-50 mx-auto"
                to={`/membership/${key}/advance`}
              >
                PURCHASE
              </Link>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="text-center py-5  card-2 my-2 my-lg-0">
              <p>BILLED MONTHLY</p>
              <h3>BASIC PLAN</h3>
              <h2>${data.price.basic}</h2>
              <p>Mobile-Optimized</p>
              <p>Best hosting</p>
              <p>Free Custom</p>
              <p>Outstanding</p>
              <p>Happy Customer</p>
              <Link
                className="btn btn-3 w-50 mx-auto"
                to={`/membership/${key}/basic`}
              >
                PURCHASE
              </Link>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="text-center py-5 card-2 my-3 my-lg-0">
              <p>BILLED MONTHLY</p>
              <h3>BEGINNER PLAN</h3>
              <h2>${data.price.beginner}</h2>
              <p>Mobile-Optimized</p>
              <p>Best hosting</p>
              <p>Free Custom</p>
              <p>Outstanding</p>
              <p>Happy Customer</p>
              <Link
                className="btn btn-3 w-50 mx-auto"
                to={`/membership/${key}/beginner`}
              >
                PURCHASE
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;

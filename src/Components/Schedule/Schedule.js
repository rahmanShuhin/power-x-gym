import React from "react";
import { useParams, Link } from "react-router-dom";
import { Data_list } from "../Data_list/Data_list";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  CardDeck,
} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import "./Schedule.css";
const Schedule = () => {
  const { key } = useParams();
  const data = Data_list.find((x) => x.key === key);
  const time = Object.entries(data.time);
  //console.log(data);
  //console.log(time);
  return (
    <>
      <Container fluid className="class-container px-md-5 px-lg-6">
        <Navigation></Navigation>
        <div>
          <h2>{data.name}</h2>
        </div>
      </Container>
      <Container fluid>
        <Row className="py-5 px-md-5 px-lg-6">
          <Col sm={6}>
            <img src={data.img} alt={data.name} className="img-fluid" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              accusamus facere nostrum, ipsa delectus assumenda ipsam dicta ab
              neque excepturi, at, aliquid reprehenderit? Cupiditate iusto
              nostrum vel, commodi veritatis exercitationem.
            </p>
            <ul>
              <li>lorem ipsum doler</li>
              <li>lorem ipsum dolor</li>
              <li>lorem ipsum dolor</li>
              <li>lorem ipsum dolor</li>
              <li>lorem ipsum dolor</li>
              <li>lorem ipsum dolor</li>
            </ul>
          </Col>
          <Col sm={6}>
            <CardDeck>
              <Row>
                {time.map((x) => (
                  <Col sm={12} md={12} lg={6} className="my-2">
                    <Card className="card-1">
                      <Card.Body>
                        <Card.Title>{x[0]}</Card.Title>
                        <Card.Subtitle className="text-warning">
                          {x[1]}
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </CardDeck>
          </Col>
          <Link
            className="btn btn-3  w-25 ml-auto mr-5 mt-5 mt-lg-0"
            to={"/pricing/" + key}
          >
            Join Us
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default Schedule;

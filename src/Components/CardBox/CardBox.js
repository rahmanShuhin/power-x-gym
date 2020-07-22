import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardBox.css";
const CardBox = (props) => {
  const { name, img, key } = props.x;
  return (
    <Col sm={4} className="py-3">
      <Card className="border-0">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Link className="btn btn-2 mx-3" to={"/schedule/" + key}>
          {name}
        </Link>
      </Card>
    </Col>
  );
};

export default CardBox;

import React from "react";
import "./ClassList.css";
import { Container, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { Data_list } from "../Data_list/Data_list";
import CardBox from "../CardBox/CardBox";
const ClassList = () => {
  //console.log(Data_list);
  return (
    <>
      <Container fluid className="class-container px-md-5 px-lg-6">
        <Navigation></Navigation>
        <div>
          <h2>OUR CLASSES</h2>
        </div>
      </Container>
      <Container fluid className="py-5 px-lg-6">
        <Row className="my-5">
          {Data_list.map((x) => (
            <CardBox x={x}></CardBox>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ClassList;

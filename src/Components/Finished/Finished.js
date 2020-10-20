import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { useParams } from "react-router-dom";

const Finished = () => {
  const { ki, mi } = useParams();
  console.log(ki, mi);
  return (
    <>
      <Container fluid className="class-container px-md-5 px-lg-6">
        <Navigation></Navigation>
        <div>
          <h2>Your Gym Membership Complete</h2>
        </div>
      </Container>
      <Container fluid className="px-md-5 px-lg-6 py-5">
        <div className="membership-line">
          <div className="line-horizontal">
            <div>1</div>
            <div></div>
            <div style={{ background: "gold" }}>2</div>
            <div></div>
            <div style={{ background: "gold" }}>3</div>
          </div>
          <div className="line-horizontal-2">
            <div>Personal Details</div>
            <div>Bank Payment</div>
            <div>Membership Created</div>
          </div>
        </div>
        <div className="text-center border my-5 py-5">
          <h3 className="text-success">Thanks For Choosing Us</h3>
          <p className="text-warning">Your Payment Is Complete</p>
          <p>Payment Id : {mi}</p>
          <p>Your Id : {ki}</p>
        </div>
      </Container>
    </>
  );
};

export default Finished;

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "./Membership.css";
import FormValidation from "../FormValidation/FormValidation";
import { GymContext } from "../GymContext/GymContext";
import Payment from "../Payment/Payment";
import { Data_list } from "../Data_list/Data_list";
import { StepContext } from "../GymContext/StepContext";
import Success from "../Success/Success";
const Membership = () => {
  const { key, price_cat } = useParams();
  const [step, setStep] = useContext(StepContext);
  const [member, setMember] = useContext(GymContext);
  const find_price = Data_list.find((x) => x.key === key);
  const price_cal = Object.entries(find_price.price);
  const official = price_cal.filter((x) => x[0] === price_cat);
  useEffect(() => {
    const newTemp = {
      key: key,
      price: official[0][1],
      payment: false,
      date: new Date(),
    };
    setMember(newTemp);
  }, []);
  console.log(step);
  return (
    <>
      <Container fluid className="class-container px-md-5 px-lg-6">
        <Navigation></Navigation>
        <div className="price">
          <h2>Your Gym Membership</h2>
        </div>
      </Container>
      <Container fluid className="px-md-5 px-lg-6 py-5">
        <div className="membership-line">
          <div className="line-horizontal">
            <div>1</div>
            <div></div>
            {step === 2 || step===3? (
              <div style={{ background: "gold" }}>2</div>
            ) : (
              <div>2</div>
            )}
            <div></div>
            {step === 3 ? (
              <div style={{ background: "gold" }}>3</div>
            ) : (
              <div>3</div>
            )}
          </div>
          <div className="line-horizontal-2">
            <div>Personal Details</div>
            <div>Bank Payment</div>
            <div>Membership Created</div>
          </div>
        </div>
      </Container>
      <Container fluid className="px-md-5 px-lg-6 my-5 py-5">
        {step === 1 && <FormValidation></FormValidation>}
        {step === 2 && <Payment></Payment>}
        {step ===3 && <Success></Success>}
      </Container>
    </>
  );
};

export default Membership;

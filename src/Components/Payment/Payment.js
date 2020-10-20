import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Bitmap from "../../Image/Bitmap.png";
import { Link } from "react-router-dom";
import "./Payment.css";
import { GymContext } from "../GymContext/GymContext";
import StripeCheckout from "../StripeCheckout/StripeCheckout";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { StepContext } from "../GymContext/StepContext";
const Payment = () => {
  const [btn_dis, setBtn] = useState(false);
  const [member, setMember] = useContext(GymContext);
  const [step, setStep] = useContext(StepContext);
  const stripePromise = loadStripe(
    "pk_test_uwGFNAgFfL5YGheJU0H4pDSv00UVKarKZx"
  );
  useEffect(() => {
    localStorage.setItem("member", JSON.stringify(member));
  }, []);
  const chckBox = () => {
    if (document.getElementById("paypal").checked === true) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  const done = () => {
    console.log(document.getElementById("paypal").checked);
  };
  const onSuccess = (payment) => {
    console.log("The payment was succeeded!", payment);
    member.payment_details=payment;
    setStep(3);
}
const onCancel = (data) => {
  console.log('The payment was cancelled!', data);
}
const onError = (err) => {
  console.log("Error!", err);
}
let env = 'sandbox'; 
let currency = 'USD'; 
let total = member.price;
const client = {
    sandbox:    'ASUZD7k9TEv_Fi-02LrTSP6P3FPAI26jhn2YXnUpc_r0ji8X0vuabmj_Rv0prAweThE5_YGVfXh2IyxO',
    production: 'YOUR-PRODUCTION-APP-ID',
 }
 console.log(member);
  return (
    <Container fluid>
      <Row>
        <Col className="border py-5">
          <Elements stripe={stripePromise}>
            <StripeCheckout />
          </Elements>
        </Col>
      </Row>
      <Row className="border py-5">
        <Col xs={6}>
          <div>
            <input type="checkbox" id="paypal" onChange={chckBox} />
            <label>
              <h5 className="ml-2">Paypal</h5>
            </label>
            <br />
            <small>*We will redirect to you Paypal Website</small>
          </div>
        </Col>
        <Col xs={6} className="d-flex justify-content-end">
        {btn_dis ? (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
          ) : (
            
           <button className="btn btn-1" disabled>Paypal</button>
          )}
        </Col>
        
      </Row>
    </Container>
  );
};

export default Payment;

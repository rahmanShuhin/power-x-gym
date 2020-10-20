import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import "./FormValidation.css";
import { GymContext } from "../GymContext/GymContext";
import { StepContext } from "../GymContext/StepContext";
const FormValidation = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [step, setStep] = useContext(StepContext);
  const [member, setMember] = useContext(GymContext);
  const onSubmit = (data) => {
    setStep(2);
    member.info = data;
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="form-input">
          <Col sm={6} className="form-col">
            <label>First Name</label>
            <input name="firstName" ref={register({ required: true })} />

            {errors.firstName && <span>First Name is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Last Name</label>
            <input name="lastName" ref={register({ required: true })} />

            {errors.lastName && <span>Last Name is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Email</label>
            <input name="email" ref={register({ required: true })} />

            {errors.email && <span>Email is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Mobile Number</label>
            <input name="mobile" ref={register({ required: true })} />

            {errors.mobile && <span>Mobile Number is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Date of Birth</label>
            <input
              type="date"
              name="birth"
              ref={register({ required: true })}
            />

            {errors.birth && <span>Date of Birth is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Gender</label>
            <input name="gender" ref={register({ required: true })} />

            {errors.gender && <span>Gender is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Address Line 1:</label>
            <input name="address" ref={register({ required: true })} />

            {errors.address && <span>Address is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Country/Region:</label>
            <input name="country" ref={register({ required: true })} />

            {errors.country && <span>Country/Region is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>City</label>
            <input name="city" ref={register({ required: true })} />

            {errors.city && <span>City is required</span>}
          </Col>
          <Col sm={6} className="form-col">
            <label>Postcode</label>
            <input name="postcode" ref={register({ required: true })} />

            {errors.postcode && <span>Postcode is required</span>}
          </Col>
          <input type="submit" className="mx-auto btn btn-3" value="Next" />
        </Row>
      </form>
    </>
  );
};

export default FormValidation;

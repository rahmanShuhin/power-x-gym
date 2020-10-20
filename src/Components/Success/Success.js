import React, { useContext } from 'react';
import { GymContext } from '../GymContext/GymContext';
import "./Success.css";
const Success = () => {
  const [member, setMember] = useContext(GymContext);
  console.log(member)
  return (
    <div className="success">
      <h4>THANKS YOUR MEMBERSHIP IS COMPLETED </h4>
  <p>Payer Id: {member.payment_details.payerID}</p>
      <p>Payment Id: {member.payment_details.paymentID}</p>
    </div>
  );
};

export default Success;
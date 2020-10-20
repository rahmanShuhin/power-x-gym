import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

const Notfound = () => {
  return (
    <>
      <Container fluid className="class-container px-md-5 px-lg-6">
        <Navigation></Navigation>
        <div>
          <h2>Error 404 not found</h2>
        </div>
      </Container>
    </>
  );
};

export default Notfound;

import React from "react";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Logging = () => {
  return (
    <Container fluid className="loggingBox">
  <Row style={{ height: '20vh' }}>rowhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhffffffffffffffffffffffffffffffffffffffffffffffffffffff</Row>

    <div style={{
        height: '53.7vh',
        backgroundColor: "#8CD9CF",
        width: '212vh',
        borderRadius: "25px", opacity: "80%" 
    }}>
  <Row className="loggingButtonsContainer">
    <div style={{
        paddingLeft: "10vh",
        paddingTop: "5vh",
        paddingRight: "10vh",
        paddingBottom: "5vh",
    }}className="loggingButtons">
      <div>
        <button className="loggingButton">Physical Symtom</button>
        <span className="buttonSpace"></span>
        <button className="loggingButton">Bowel Movements</button>
      </div>
      <div >
        <button className="loggingButton">Appetite</button>
        <span className="buttonSpace"></span>
<button className="loggingButton">Wellbeing & Exercise</button>
      </div>
      <div>
        <button className="loggingButton">Food & Supplements</button>
        <span className="buttonSpace"></span>
<button className="loggingButton">Other</button>
      </div>
    </div>
  </Row>
  </div>
</Container>



  );
};

export default Logging;

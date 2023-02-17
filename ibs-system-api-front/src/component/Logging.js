import React from "react";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Calendar from 'react-calendar'

const Logging = () => {
  return (
    <div fluid className="loggingBox">
    <div>
      <Calendar className="react-calendar" />
      <p style={{position: "absolute", top: "0", right: "25px"}} className="circular">N.C</p>
        </div>
<div style={{
  marginBottom:"40px"
}}></div>
  <div style={{
    position: "relative",
    backgroundColor: "#8CD9CF",
    opacity: "85%",
    height: "248px",
    borderRadius: "25px"
  }}>
    <div>
      <div style={{
        paddingLeft: "70px",
        paddingTop: "13px"
      }}>
        <div>
          <button className="loggingButton">Physical Symptom</button>
          <span className="buttonSpace"></span>
          <button className="loggingButton">Bowel Movements</button>
        </div>
        <span className="buttonSpace"></span>
        <div>
          <button className="loggingButton">Appetite</button>
          <span className="buttonSpace"></span>
          <button className="loggingButton">Wellbeing & Exercise</button>
        </div>
        <span className="buttonSpace"></span>
        <div>
          <button className="loggingButton">Food & Supplements</button>
          <span className="buttonSpace"></span>
          <button className="loggingButton">Other</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Logging;

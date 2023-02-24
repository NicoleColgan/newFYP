import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Calendar from 'react-calendar'
import Hunger from "./Hunger";
import Satiety from "./Satiety";
import Apetite from "./Appetite";
import LoggingPhysicalSymptom from "./LoggingPhysicalSymptom";

const Logging = () => {
  const [showPhysicalSymptomPopup, setShowPhysicalSymptomPopup] = useState(false);
  
  function handlePhysicalSymptomButtonClick(){
    setShowPhysicalSymptomPopup(true);
  }
  function handlePhysicalSymptomCloseButtonClick(){
    setShowPhysicalSymptomPopup(false);
  }
  const [showAppetitePopup, setShowAppetitePopup] = useState(false);

  
  function handleAppetiteButtonClick(){
    setShowAppetitePopup(true);
  }
  function handleAppetiteCloseButtonClick(){
    setShowAppetitePopup(false);
  }

  const [hungerButtonClicked, setHungerButtonClicked] = useState(false);  //used to colour keep the colour of the button blue after weve logged for it

  const [showHungerPopUp, setShowHungerPopUp] = useState(false);
  function handleHungerButtonClick(){
    setHungerButtonClicked(true); //method dependent
    setShowHungerPopUp(true); //method dependent
    setShowAppetitePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleHungerButtonCloseClick(){
    setShowHungerPopUp(false);  //method dependent
    setShowAppetitePopup(true);
  }

  //satiety
  const [satietyButtonClicked, setSatietyButtonClicked] = useState(false);
  const [showSatietyPopUp, setShowSatietyPopUp] = useState(false);
  function handleSatietyButtonClick(){
    setSatietyButtonClicked(true);
    setShowSatietyPopUp(true);
    setShowAppetitePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleSatietyButtonCloseClick(){
    setShowSatietyPopUp(false);
    setShowAppetitePopup(true);
  }
  return (
    <div fluid className="loggingBox">
      {showPhysicalSymptomPopup && <LoggingPhysicalSymptom onClose={handlePhysicalSymptomCloseButtonClick} />}
      {showAppetitePopup && <Apetite onClose={handleAppetiteCloseButtonClick} hungerButtonPressed={handleHungerButtonClick} hungerButtonClicked={hungerButtonClicked} satietyButtonPressed={handleSatietyButtonClick} satietyButtonClicked={satietyButtonClicked}/>}
      {showHungerPopUp && <Hunger onClose={handleHungerButtonCloseClick}/>}
      {showSatietyPopUp && <Satiety onClose={handleSatietyButtonCloseClick}/>}

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
          <button onClick={handlePhysicalSymptomButtonClick} className="loggingButton">Physical Symptom</button>
          <span className="buttonSpace"></span>
          <button className="loggingButton">Bowel Movements</button>
        </div>
        <span className="buttonSpace"></span>
        <div>
          <button onClick={handleAppetiteButtonClick} className="loggingButton">Appetite</button>
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

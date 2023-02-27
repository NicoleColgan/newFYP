import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Calendar from 'react-calendar'
import Hunger from "./Hunger";
import Satiety from "./Satiety";
import Apetite from "./Appetite";
import NumMeals from "./NumMeals";
import Reg from "./Reg"
import LoggingPhysicalSymptom from "./LoggingPhysicalSymptom";
import FoodAndSupplements from "./FoodAndSupplements";
import Hydration from "./Hydration";
import TriggerFood from "./TriggerFood";
import Fibre from "./Fibre";

const Logging = () => {
  const [showPhysicalSymptomPopup, setShowPhysicalSymptomPopup] = useState(false);
  
  function handlePhysicalSymptomButtonClick(){
    setShowPhysicalSymptomPopup(true);
  }
  function handlePhysicalSymptomCloseButtonClick(){
    setShowPhysicalSymptomPopup(false);
  }

  //apetite
  const [showAppetitePopup, setShowAppetitePopup] = useState(false);

  function handleAppetiteButtonClick(){
    setShowAppetitePopup(true);
  }
  function handleAppetiteCloseButtonClick(){
    setShowAppetitePopup(false);
  }

  //hunger button
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

  //num meals button
  const [numMealsButtonClicked, setNumMealsButtonClicked] = useState(false);  //used to colour keep the colour of the button blue after weve logged for it
  const [showNumMealsPopUp, setShowNumMealsPopUp] = useState(false);
  function handleNumMealsButtonClick(){
    setNumMealsButtonClicked(true); //method dependent
    setShowNumMealsPopUp(true); //method dependent
    setShowAppetitePopup(false);
  }
  function handleNumMealsButtonCloseClick(){
    setShowNumMealsPopUp(false);  //method dependent
    setShowAppetitePopup(true);
  }

  //Meal regularity
  const [regButtonClicked, setRegButtonClicked] = useState(false);  //used to colour keep the colour of the button blue after weve logged for it
  const [showRegPopUp, setShowRegPopUp] = useState(false);
  function handleRegButtonClick(){
    setRegButtonClicked(true); //method dependent
    setShowRegPopUp(true); //method dependent
    setShowAppetitePopup(false);
  }
  function handleRegButtonCloseClick(){
    setShowRegPopUp(false);  //method dependent
    setShowAppetitePopup(true);
  }

  //food and supplements
  const [showFoodAndSupplementsPopup, setShowFoodAndSupplementsPopup] = useState(false);

  function handleFoodAndSupplementsButtonClick(){
    setShowFoodAndSupplementsPopup(true);
  }
  function handleFoodAndSupplementsCloseButtonClick(){
    setShowFoodAndSupplementsPopup(false);
  }

  //hydration button
  const [hydrationButtonClicked, setHydrationButtonClicked] = useState(false);  //used to colour keep the colour of the button blue after weve logged for it
  const [showHydrationPopUp, setShowHydrationPopUp] = useState(false);
  function handleHydrationButtonClick(){
    setHydrationButtonClicked(true); //method dependent
    setShowHydrationPopUp(true); //method dependent
    setShowFoodAndSupplementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleHydrationButtonCloseClick(){
    setShowHydrationPopUp(false);  //method dependent
    setShowFoodAndSupplementsPopup(true);
  }

  //TriggerFood
  const [triggerFoodButtonClicked, setTriggerFoodButtonClicked] = useState(false);  //used to colour keep the colour of the button blue after weve logged for it
  const [showTriggerFoodPopUp, setShowTriggerFoodPopUp] = useState(false);
  function handleTriggerFoodButtonClick(){
    setTriggerFoodButtonClicked(true); //method dependent
    setShowTriggerFoodPopUp(true); //method dependent
    setShowFoodAndSupplementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleTriggerFoodButtonCloseClick(){
    setShowTriggerFoodPopUp(false);  //method dependent
    setShowFoodAndSupplementsPopup(true);
  }
  //Fibre
  const [fibreButtonClicked, setFibreButtonClicked] = useState(false);  //used to colour keep the colour of the button blue after weve logged for it
  const [showFibrePopUp, setShowFibrePopUp] = useState(false);
  function handleFibreButtonClick(){
    setFibreButtonClicked(true); //method dependent
    setShowFibrePopUp(true); //method dependent
    setShowFoodAndSupplementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleFibreButtonCloseClick(){
    setShowFibrePopUp(false);  //method dependent
    setShowFoodAndSupplementsPopup(true);
  }

  return (
    <div fluid className="loggingBox">
      {showPhysicalSymptomPopup && <LoggingPhysicalSymptom onClose={handlePhysicalSymptomCloseButtonClick} />}
      {showAppetitePopup && <Apetite onClose={handleAppetiteCloseButtonClick} hungerButtonPressed={handleHungerButtonClick} hungerButtonClicked={hungerButtonClicked} satietyButtonPressed={handleSatietyButtonClick} satietyButtonClicked={satietyButtonClicked} numMealsButtonPressed={handleNumMealsButtonClick} numMealsButtonClicked={numMealsButtonClicked} regButtonPressed={handleRegButtonClick} regButtonClicked={regButtonClicked}/>}
      {showHungerPopUp && <Hunger onClose={handleHungerButtonCloseClick}/>}
      {showSatietyPopUp && <Satiety onClose={handleSatietyButtonCloseClick}/>}
      {showNumMealsPopUp && <NumMeals onClose={handleNumMealsButtonCloseClick}/>}
      {showRegPopUp && <Reg onClose={handleRegButtonCloseClick}/>}
      {showFoodAndSupplementsPopup && <FoodAndSupplements onClose={handleFoodAndSupplementsCloseButtonClick} hydrationButtonPressed={handleHydrationButtonClick} hydrationButtonClicked={hydrationButtonClicked} triggerFoodButtonPressed={handleTriggerFoodButtonClick} triggerFoodButtonClicked={triggerFoodButtonClicked} fibreButtonPressed={handleFibreButtonClick} fibreButtonClicked={fibreButtonClicked}/>}
      {showHydrationPopUp && <Hydration onClose={handleHydrationButtonCloseClick}/>}
      {showTriggerFoodPopUp && <TriggerFood onClose={handleTriggerFoodButtonCloseClick}/>}
      {showFibrePopUp && <Fibre onClose={handleFibreButtonCloseClick}/>}

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
          <button onClick={handleFoodAndSupplementsButtonClick} className="loggingButton">Food & Supplements</button>
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

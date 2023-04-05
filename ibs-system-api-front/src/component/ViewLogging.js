import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Apetite from "./Appetite";
import ViewLoggingPhysicalSymptom from "./ViewLoggingPhysicalSymptom";
import FoodAndSupplements from "./FoodAndSupplements";
import Hydration from "./Hydration";
import TriggerFood from "./TriggerFood";
import Fibre from "./Fibre";
import Supplements from "./Supplements";
import BowelMovements from "./BowelMovements";
import Frequency from "./Frequency";
import Consistency from "./Consistency";
import Other from "./Other";
import WellbeingAndExercise from "./WellbeingAndExercise";
import MentalHealth from "./MentalHealth";
import ExerciseFrequency from "./ExerciseFrequency";
import ExerciseIntensity from "./ExerciseIntensity";
import Sleep from "./Sleep";
import OtherLog from "./OtherLog";
import { useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import BurgerMenu from "./BurgerMenu";
import UserMenu from "./UserMenu";
import LogService from "../services/LogService";
import ViewHunger from "./ViewHunger";
import ViewSatiety from "./ViewSatiety";
import ViewNumMeals from "./ViewNumMeals";
import ViewReg from "./ViewReg";
import ViewOtherLog from "./ViewOtherLog";
const ViewLogging = () => {
  const [log, setLog] = useState({
    id: "",
    userId: "",
    date: "",
    logType: "",
    logDataEntities: "",
  });

  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("token") !== null;
  //if theyre authenticated they can view this otherwise have to log in
  //useEffect because it runs after component is rendered and all these parts
  //are run  before anything is rendered so theyll essentially be covered by the html after
  const useAuthentication = () => {
    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/landing");
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated;
  };
  useAuthentication();

  const [showPhysicalSymptomPopup, setShowPhysicalSymptomPopup] =
    useState(false);
  function handlePhysicalSymptomButtonClick() {
    setShowPhysicalSymptomPopup(true);
  }
  function handlePhysicalSymptomCloseButtonClick() {
    setShowPhysicalSymptomPopup(false);
  }

  //apetite
  const [showAppetitePopup, setShowAppetitePopup] = useState(false);
  const [button3CloseClicked, setButton3CloseClicked] = useState(false); //green

  function handleAppetiteButtonClick() {
    setShowAppetitePopup(true);
  }
  function handleAppetiteCloseButtonClick() {
    setShowAppetitePopup(false);
  }

  //hunger button
  const [hungerButtonClicked, setHungerButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showHungerPopUp, setShowHungerPopUp] = useState(false);
  function handleHungerButtonClick() {
    setShowHungerPopUp(true); //method dependent
    setShowAppetitePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleHungerButtonCloseClick() {
    setShowHungerPopUp(false); //method dependent
    setShowAppetitePopup(true);
  }

  //satiety
  const [satietyButtonClicked, setSatietyButtonClicked] = useState(false);
  const [showSatietyPopUp, setShowSatietyPopUp] = useState(false);
  function handleSatietyButtonClick() {
    setShowSatietyPopUp(true);
    setShowAppetitePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleSatietyButtonCloseClick() {
    setShowSatietyPopUp(false);
    setShowAppetitePopup(true);
  }

  //num meals button
  const [numMealsButtonClicked, setNumMealsButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showNumMealsPopUp, setShowNumMealsPopUp] = useState(false);
  function handleNumMealsButtonClick() {
    setShowNumMealsPopUp(true); //method dependent
    setShowAppetitePopup(false);
  }
  function handleNumMealsButtonCloseClick() {
    setShowNumMealsPopUp(false); //method dependent
    setShowAppetitePopup(true);
  }

  //Meal regularity
  const [regButtonClicked, setRegButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showRegPopUp, setShowRegPopUp] = useState(false);
  function handleRegButtonClick() {
    setShowRegPopUp(true); //method dependent
    setShowAppetitePopup(false);
  }
  function handleRegButtonCloseClick() {
    setShowRegPopUp(false); //method dependent
    setShowAppetitePopup(true);
  }

  //food and supplements
  const [showFoodAndSupplementsPopup, setShowFoodAndSupplementsPopup] =
    useState(false);
  const [button5CloseClicked, setButton5CloseClicked] = useState(false); //green

  function handleFoodAndSupplementsButtonClick() {
    setShowFoodAndSupplementsPopup(true);
  }
  function handleFoodAndSupplementsCloseButtonClick() {
    setShowFoodAndSupplementsPopup(false);
    setButton5CloseClicked(true);
  }

  //hydration button
  const [hydrationButtonClicked, setHydrationButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showHydrationPopUp, setShowHydrationPopUp] = useState(false);
  function handleHydrationButtonClick() {
    setHydrationButtonClicked(true); //method dependent
    setShowHydrationPopUp(true); //method dependent
    setShowFoodAndSupplementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleHydrationButtonCloseClick() {
    setShowHydrationPopUp(false); //method dependent
    setShowFoodAndSupplementsPopup(true);
  }

  //TriggerFood
  const [triggerFoodButtonClicked, setTriggerFoodButtonClicked] =
    useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showTriggerFoodPopUp, setShowTriggerFoodPopUp] = useState(false);
  function handleTriggerFoodButtonClick() {
    setTriggerFoodButtonClicked(true); //method dependent
    setShowTriggerFoodPopUp(true); //method dependent
    setShowFoodAndSupplementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleTriggerFoodButtonCloseClick() {
    setShowTriggerFoodPopUp(false); //method dependent
    setShowFoodAndSupplementsPopup(true);
  }

  //Fibre
  const [fibreButtonClicked, setFibreButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showFibrePopUp, setShowFibrePopUp] = useState(false);
  function handleFibreButtonClick() {
    setFibreButtonClicked(true); //method dependent
    setShowFibrePopUp(true); //method dependent
    setShowFoodAndSupplementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleFibreButtonCloseClick() {
    setShowFibrePopUp(false); //method dependent
    setShowFoodAndSupplementsPopup(true);
  }

  //Supplements
  const [supplementsButtonClicked, setSupplementsButtonClicked] =
    useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showSupplementsPopUp, setShowSupplementsPopUp] = useState(false);
  function handleSupplementsButtonClick() {
    setSupplementsButtonClicked(true); //method dependent
    setShowSupplementsPopUp(true); //method dependent
    setShowFoodAndSupplementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleSupplementsButtonCloseClick() {
    setShowSupplementsPopUp(false); //method dependent
    setShowFoodAndSupplementsPopup(true);
  }

  //BowelMovements
  const [showBowelMovementsPopup, setShowBowelMovementsPopup] = useState(false);
  const [button2CloseClicked, setButton2CloseClicked] = useState(false); //green

  function handleBowelMovementsButtonClick() {
    setShowBowelMovementsPopup(true);
  }
  function handleBowelMovementsCloseButtonClick() {
    setShowBowelMovementsPopup(false);
    setButton2CloseClicked(true);
  }

  //Frequency
  const [frequencyButtonClicked, setFrequencyButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showFrequencyPopUp, setShowFrequencyPopUp] = useState(false);
  function handleFrequencyButtonClick() {
    setFrequencyButtonClicked(true); //method dependent
    setShowFrequencyPopUp(true); //method dependent
    setShowBowelMovementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleFrequencyButtonCloseClick() {
    setShowFrequencyPopUp(false); //method dependent
    setShowBowelMovementsPopup(true);
  }

  //Consistency
  const [consistencyButtonClicked, setConsistencyButtonClicked] =
    useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showConsistencyPopUp, setShowConsistencyPopUp] = useState(false);
  function handleConsistencyButtonClick() {
    setConsistencyButtonClicked(true); //method dependent
    setShowConsistencyPopUp(true); //method dependent
    setShowBowelMovementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleConsistencyButtonCloseClick() {
    setShowConsistencyPopUp(false); //method dependent
    setShowBowelMovementsPopup(true);
  }

  //Other
  const [otherButtonClicked, setOtherButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showOtherPopUp, setShowOtherPopUp] = useState(false);
  function handleOtherButtonClick() {
    setOtherButtonClicked(true); //method dependent
    setShowOtherPopUp(true); //method dependent
    setShowBowelMovementsPopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleOtherButtonCloseClick() {
    setShowOtherPopUp(false); //method dependent
    setShowBowelMovementsPopup(true);
  }

  //WellbeingAndExercise
  const [showWellbeingAndExercisePopup, setShowWellbeingAndExercisePopup] =
    useState(false);
  const [button4CloseClicked, setButton4CloseClicked] = useState(false); //green

  function handleWellbeingAndExerciseButtonClick() {
    setShowWellbeingAndExercisePopup(true);
  }
  function handleWellbeingAndExerciseCloseButtonClick() {
    setShowWellbeingAndExercisePopup(false);
    setButton4CloseClicked(true);
  }

  //MentalHealth
  const [mentalHealthButtonClicked, setMentalHealthButtonClicked] =
    useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showMentalHealthPopUp, setShowMentalHealthPopUp] = useState(false);
  function handleMentalHealthButtonClick() {
    setMentalHealthButtonClicked(true); //method dependent
    setShowMentalHealthPopUp(true); //method dependent
    setShowWellbeingAndExercisePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleMentalHealthButtonCloseClick() {
    setShowMentalHealthPopUp(false); //method dependent
    setShowWellbeingAndExercisePopup(true);
  }

  //ExerciseFrequency
  const [exerciseFrequencyButtonClicked, setExerciseFrequencyButtonClicked] =
    useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showExerciseFrequencyPopUp, setShowExerciseFrequencyPopUp] =
    useState(false);
  function handleExerciseFrequencyButtonClick() {
    setExerciseFrequencyButtonClicked(true); //method dependent
    setShowExerciseFrequencyPopUp(true); //method dependent
    setShowWellbeingAndExercisePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleExerciseFrequencyButtonCloseClick() {
    setShowExerciseFrequencyPopUp(false); //method dependent
    setShowWellbeingAndExercisePopup(true);
  }

  //ExerciseIntensity
  const [exerciseIntensityButtonClicked, setExerciseIntensityButtonClicked] =
    useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showExerciseIntensityPopUp, setShowExerciseIntensityPopUp] =
    useState(false);
  function handleExerciseIntensityButtonClick() {
    setExerciseIntensityButtonClicked(true); //method dependent
    setShowExerciseIntensityPopUp(true); //method dependent
    setShowWellbeingAndExercisePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleExerciseIntensityButtonCloseClick() {
    setShowExerciseIntensityPopUp(false); //method dependent
    setShowWellbeingAndExercisePopup(true);
  }

  //Sleep
  const [sleepButtonClicked, setSleepButtonClicked] = useState(false); //used to colour keep the colour of the button blue after weve logged for it
  const [showSleepPopUp, setShowSleepPopUp] = useState(false);
  function handleSleepButtonClick() {
    setSleepButtonClicked(true); //method dependent
    setShowSleepPopUp(true); //method dependent
    setShowWellbeingAndExercisePopup(false);
    //want to set this colour to blue and stay like this
  }
  function handleSleepButtonCloseClick() {
    setShowSleepPopUp(false); //method dependent
    setShowWellbeingAndExercisePopup(true);
  }

  //OtherLog
  const [showOtherLogPopup, setShowOtherLogPopup] = useState(false);
  const [button6CloseClicked, setButton6CloseClicked] = useState(false); //green

  function handleOtherLogButtonClick() {
    setShowOtherLogPopup(true);
  }
  function handleOtherLogCloseButtonClick() {
    setShowOtherLogPopup(false);
  }

  //get initials for bubble
  function getInitials() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token == null || token.firstName == null || token.lastName == null) {
      return "N/A";
    } else {
      var firstInitial = token.firstName.charAt(0).toUpperCase();
      var secondInitial = token.lastName.charAt(0).toUpperCase();
      firstInitial = firstInitial.toUpperCase();
      secondInitial = secondInitial.toUpperCase();
    }
    return firstInitial + "." + secondInitial;
  }

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showUserMenu,setShowUserMenu]= useState(false);
  const [showWriteLogImage, setShowWriteLogImage] = useState(true);
  const [showViewLogImage, setShowViewLogImage] = useState(false);
  const [showAnalyticsImage, setShowAnalyticsImage] = useState(true);
  const [showLearnImage, setShowLearnImage] = useState(true);
  const [showTestImage, setShowTestImage] = useState(true);
  function HandleMakeALog(){  //write a log
    navigate("/logging");
  }
  function HandleViewLogPressed(){
    setIsBurgerMenuActive(false);
    setShowBurgerMenu(false);
    setShowViewLogImage(true);
    setShowWriteLogImage(false);
    setShowAnalyticsImage(false);
    setShowLearnImage(false);
    setShowTestImage(false);
    navigate("/viewLogging");
  }
  function HandleAnalyticsPressed(){
    setIsBurgerMenuActive(false);
    setShowBurgerMenu(false);
    setShowViewLogImage(false);
    setShowWriteLogImage(false);
    setShowAnalyticsImage(true);
    setShowLearnImage(false);
    setShowTestImage(false);
    navigate("/analytics");
  }
  function HandleLearnPressed(){
    setIsBurgerMenuActive(false);
    setShowBurgerMenu(false);
    setShowViewLogImage(false);
    setShowWriteLogImage(false);
    setShowAnalyticsImage(false);
    setShowLearnImage(true);
    setShowTestImage(false);
  }
  function HandleTestPressed(){
    setIsBurgerMenuActive(false);
    setShowBurgerMenu(false);
    setShowViewLogImage(false);
    setShowWriteLogImage(false);
    setShowAnalyticsImage(false);
    setShowLearnImage(false);
    setShowTestImage(true);
  }
  
  const [burgerMenuActive, setIsBurgerMenuActive]=useState(false);
  
  //disable future dates on tile
  const [date, setDate] = useState(new Date());

  //disable tiles after today
  const tileDisabled = ({date}) => date > new Date();

  useEffect(() => {
    showCalenderInstructionsHandler();
  }, []);
   const [showCalenderInstructions, setShowCalenderInstructions] = useState(false);

  const showCalenderInstructionsHandler = () => {
    setShowCalenderInstructions(true);
    setTimeout(() => setShowCalenderInstructions(false), 10000);  //hide after 3 secs
  }

  //handle calender clicks
  const [selectedDate, setSelectedDate] = useState(new Date());

  //physical symtoms button colour
  const [bloatingButtonColour,setBloatingButtonColour] = useState("#8CD9CF");   //default colour is green
  
  const [gasButtonColour,setGasButtonColour] = useState("#8CD9CF");   //default colour is green

  const [acneButtonColour,setAcneButtonColour] = useState("#8CD9CF");   //default colour is green

  const [lowEnergyButtonColour,setLowEnergyButtonColour] = useState("#8CD9CF");   //default colour is green

  const [stressButtonColour,setStressButtonColour] = useState("#8CD9CF");   //default colour is green

  const [headachesButtonColour,setHeadachesButtonColour] = useState("#8CD9CF");   //default colour is green

  //hunger symtoms button colour
  const [lessHungryButtonColour,setLessHungryButtonColour] = useState("#8CD9CF");   //default colour is green
  
  const [normalButtonColour,setNormalButtonColour] = useState("#8CD9CF");   //default colour is green

  const [moreHungryButtonColour,setMoreHungryButtonColour] = useState("#8CD9CF");   //default colour is green

  //satiety symtoms button colour
  const [lowSatietyButtonColour,setLowSatietyButtonColour] = useState("#8CD9CF");   //default colour is green
  
  const [normalSatietyButtonColour,setNormalSatietyButtonColour] = useState("#8CD9CF");   //default colour is green
  
  const [highSatietyButtonColour,setHighSatietyButtonColour] = useState("#8CD9CF");   //default colour is green

  //satiety symtoms button colour
  const [zeroThreeButtonColour,setZeroThreeButtonColour] = useState("#8CD9CF");   //default colour is green
  
  const [fourFiveButtonColour,setFourFiveButtonColour] = useState("#8CD9CF");   //default colour is green
      
  const [fivePlusButtonColour,setFivePlusButtonColour] = useState("#8CD9CF");   //default colour is green

  //Regularity symtoms button colour
  const [inconsistentMealPatternsButtonColour,setInconsistentMealPatternsButtonColour] = useState("#8CD9CF");   //default colour is green
  
  const [consistentMealPatternsButtonColour,setConsistentMealPatternsButtonColour] = useState("#8CD9CF");   //default colour is green
              
  //other log text
  const[otherLogText, setOtherLogText]=useState("");

  async function HandleDateChange (date) {
    //reset all buttons to green
    setLessHungryButtonColour("#8CD9CF");
    setNormalButtonColour("#8CD9CF");
    setMoreHungryButtonColour("#8CD9CF");

    setBloatingButtonColour("#8CD9CF");
    setGasButtonColour("#8CD9CF");
    setAcneButtonColour("#8CD9CF");
    setLowEnergyButtonColour("#8CD9CF");
    setStressButtonColour("#8CD9CF");
    setHeadachesButtonColour("#8CD9CF");

    setOtherLogText("");
    
    setSelectedDate(date);
    console.log("selected date: "+date);
    //gather all the data from this day 
    const logsOnSpecificDay = await LogService.getLogByDate(date);

    if(logsOnSpecificDay){
      //extract each type of log
      for(let i=0; i<logsOnSpecificDay.length; i++){
          if(logsOnSpecificDay[i].logType==="Physical Symptom"){
              if(logsOnSpecificDay[i].logDataEntities.length>0){
              const physicalSymptomLogDataEntities = logsOnSpecificDay[i].logDataEntities;
              //loop thorugh all physical symtom log data enties
                  for(let j=0; j<physicalSymptomLogDataEntities.length; j++){
                      //set the colour for each button
                      if(physicalSymptomLogDataEntities[j].data==="Bloating"){
                          //set colour to be blue to indicate that it was pressed
                          //these values will be passed as props to the view 
                          //component an be used to set the colour of the buttons
                          setBloatingButtonColour("#4da6ff");  
                      }
                      else if(physicalSymptomLogDataEntities[j].data==="Headaches"){
                          //set colour to be blue to indicate that it was pressed
                          //these values will be passed as props to the view 
                          //component an be used to set the colour of the buttons
                          setHeadachesButtonColour("#4da6ff"); 
                      }
                      else if(physicalSymptomLogDataEntities[j].data==="Gas"){
                          //set colour to be blue to indicate that it was pressed
                          //these values will be passed as props to the view 
                          //component an be used to set the colour of the buttons
                          setGasButtonColour("#4da6ff"); 
                      }
                      else if(physicalSymptomLogDataEntities[j].data==="Acne"){
                          //set colour to be blue to indicate that it was pressed
                          //these values will be passed as props to the view 
                          //component an be used to set the colour of the buttons
                          setAcneButtonColour("#4da6ff"); 
                      }
                      else if(physicalSymptomLogDataEntities[j].data==="Low Energy"){
                          //set colour to be blue to indicate that it was pressed
                          //these values will be passed as props to the view 
                          //component an be used to set the colour of the buttons
                          setLowEnergyButtonColour("#4da6ff"); 
                      }
                      else if(physicalSymptomLogDataEntities[j].data==="Stress"){
                          //set colour to be blue to indicate that it was pressed
                          //these values will be passed as props to the view 
                          //component an be used to set the colour of the buttons
                          setStressButtonColour("#4da6ff"); 
                      }
                  }
              }
          }
          if(logsOnSpecificDay[i].logType==="Hunger"){
            if(logsOnSpecificDay[i].logDataEntities.length>0){
            const physicalSymptomLogDataEntities = logsOnSpecificDay[i].logDataEntities;
            //loop thorugh all physical symtom log data enties
                for(let j=0; j<physicalSymptomLogDataEntities.length; j++){
                    //set the colour for each button
                    if(physicalSymptomLogDataEntities[j].data==="Less Hungry"){
                        //set colour to be blue to indicate that it was pressed
                        //these values will be passed as props to the view 
                        //component an be used to set the colour of the buttons
                        setLessHungryButtonColour("#4da6ff");  
                    }
                    else if(physicalSymptomLogDataEntities[j].data==="Normal"){
                        //set colour to be blue to indicate that it was pressed
                        //these values will be passed as props to the view 
                        //component an be used to set the colour of the buttons
                        setNormalButtonColour("#4da6ff"); 
                    }
                    else if(physicalSymptomLogDataEntities[j].data==="More Hungry"){
                        //set colour to be blue to indicate that it was pressed
                        //these values will be passed as props to the view 
                        //component an be used to set the colour of the buttons
                        setMoreHungryButtonColour("#4da6ff"); 
                    }
                    
                }
            }
        }

        if(logsOnSpecificDay[i].logType==="Satiety"){
          if(logsOnSpecificDay[i].logDataEntities.length>0){
          const physicalSymptomLogDataEntities = logsOnSpecificDay[i].logDataEntities;
          //loop thorugh all physical symtom log data enties
              for(let j=0; j<physicalSymptomLogDataEntities.length; j++){
                  //set the colour for each button
                  if(physicalSymptomLogDataEntities[j].data==="Low Satiety"){
                      //set colour to be blue to indicate that it was pressed
                      //these values will be passed as props to the view 
                      //component an be used to set the colour of the buttons
                      setLowSatietyButtonColour("#4da6ff");  
                  }
                  else if(physicalSymptomLogDataEntities[j].data==="Normal"){
                      //set colour to be blue to indicate that it was pressed
                      //these values will be passed as props to the view 
                      //component an be used to set the colour of the buttons
                      setNormalSatietyButtonColour("#4da6ff"); 
                  }
                  else if(physicalSymptomLogDataEntities[j].data==="High Satiety"){
                      //set colour to be blue to indicate that it was pressed
                      //these values will be passed as props to the view 
                      //component an be used to set the colour of the buttons
                      setHighSatietyButtonColour("#4da6ff"); 
                  }
                  
              }
          }
      }

      if(logsOnSpecificDay[i].logType==="Number of meals"){
        if(logsOnSpecificDay[i].logDataEntities.length>0){
        const physicalSymptomLogDataEntities = logsOnSpecificDay[i].logDataEntities;
        //loop thorugh all physical symtom log data enties
            for(let j=0; j<physicalSymptomLogDataEntities.length; j++){
                //set the colour for each button
                if(physicalSymptomLogDataEntities[j].data==="0-3"){
                    //set colour to be blue to indicate that it was pressed
                    //these values will be passed as props to the view 
                    //component an be used to set the colour of the buttons
                    setZeroThreeButtonColour("#4da6ff");  
                }
                else if(physicalSymptomLogDataEntities[j].data==="4-5"){
                    //set colour to be blue to indicate that it was pressed
                    //these values will be passed as props to the view 
                    //component an be used to set the colour of the buttons
                    setFourFiveButtonColour("#4da6ff"); 
                }
                else if(physicalSymptomLogDataEntities[j].data==="5+"){
                    //set colour to be blue to indicate that it was pressed
                    //these values will be passed as props to the view 
                    //component an be used to set the colour of the buttons
                    setFivePlusButtonColour("#4da6ff"); 
                }
                
            }
        }
    }

    
    if(logsOnSpecificDay[i].logType==="Meal regularity"){
      if(logsOnSpecificDay[i].logDataEntities.length>0){
      const physicalSymptomLogDataEntities = logsOnSpecificDay[i].logDataEntities;
      //loop thorugh all physical symtom log data enties
          for(let j=0; j<physicalSymptomLogDataEntities.length; j++){
              //set the colour for each button
              if(physicalSymptomLogDataEntities[j].data==="Inconsistent meal patterns"){
                  //set colour to be blue to indicate that it was pressed
                  //these values will be passed as props to the view 
                  //component an be used to set the colour of the buttons
                  setInconsistentMealPatternsButtonColour("#4da6ff");  
              }
              else if(physicalSymptomLogDataEntities[j].data==="Consistent meal patterns"){
                  //set colour to be blue to indicate that it was pressed
                  //these values will be passed as props to the view 
                  //component an be used to set the colour of the buttons
                  setConsistentMealPatternsButtonColour("#4da6ff"); 
              }
          }
      }
  }

  if(logsOnSpecificDay[i].logType==="Other log"){
    if(logsOnSpecificDay[i].logDataEntities.length>0){
    const physicalSymptomLogDataEntities = logsOnSpecificDay[i].logDataEntities;
    //only one value to read
    const text = physicalSymptomLogDataEntities[0].data;
    console.log("text: "+text);
    setOtherLogText(text);
    }
}


    }
      }
  }

 


  return (
    <div fluid className="loggingBox">
      {showPhysicalSymptomPopup && (
        <ViewLoggingPhysicalSymptom
          onClose={handlePhysicalSymptomCloseButtonClick}
          log={log}
          setLog={setLog}
          headachesButtonColour={headachesButtonColour}
          bloatingButtonColour={bloatingButtonColour}
          gasButtonColour={gasButtonColour}
          acneButtonColour={acneButtonColour}
          lowEnergyButtonColour={lowEnergyButtonColour}
          stressButtonColour={stressButtonColour}

        />
      )}
      {showAppetitePopup && (
        <Apetite
          onClose={handleAppetiteCloseButtonClick}
          hungerButtonPressed={handleHungerButtonClick}
          satietyButtonPressed={handleSatietyButtonClick}
          numMealsButtonPressed={handleNumMealsButtonClick}
          regButtonPressed={handleRegButtonClick}
        />
      )}
      {showHungerPopUp && <ViewHunger onClose={handleHungerButtonCloseClick} lessHungryButtonColour={lessHungryButtonColour}
          normalButtonColour={normalButtonColour}
          moreHungryButtonColour={moreHungryButtonColour}/>}
      {showSatietyPopUp && <ViewSatiety onClose={handleSatietyButtonCloseClick} lowSatietyButtonColour={lowSatietyButtonColour} normalSatietyButtonColour={normalSatietyButtonColour} highSatietyButtonColour={highSatietyButtonColour}/>}
      {showNumMealsPopUp && (
        <ViewNumMeals onClose={handleNumMealsButtonCloseClick} zeroThreeButtonColour={zeroThreeButtonColour} fourFiveButtonColour={fourFiveButtonColour} fivePlusButtonColour={fivePlusButtonColour}/>
      )}
      {showRegPopUp && <ViewReg onClose={handleRegButtonCloseClick} inconsistentMealPatternsButtonColour={inconsistentMealPatternsButtonColour} consistentMealPatternsButtonColour={consistentMealPatternsButtonColour}/>}
      {showFoodAndSupplementsPopup && (
        <FoodAndSupplements
          onClose={handleFoodAndSupplementsCloseButtonClick}
          hydrationButtonPressed={handleHydrationButtonClick}
          hydrationButtonClicked={hydrationButtonClicked}
          triggerFoodButtonPressed={handleTriggerFoodButtonClick}
          triggerFoodButtonClicked={triggerFoodButtonClicked}
          fibreButtonPressed={handleFibreButtonClick}
          fibreButtonClicked={fibreButtonClicked}
          supplementsButtonPressed={handleSupplementsButtonClick}
          supplementsButtonClicked={supplementsButtonClicked}
        />
      )}
      {showHydrationPopUp && (
        <Hydration onClose={handleHydrationButtonCloseClick} />
      )}
      {showTriggerFoodPopUp && (
        <TriggerFood onClose={handleTriggerFoodButtonCloseClick} />
      )}
      {showFibrePopUp && <Fibre onClose={handleFibreButtonCloseClick} />}
      {showSupplementsPopUp && (
        <Supplements onClose={handleSupplementsButtonCloseClick} />
      )}
      {showBowelMovementsPopup && (
        <BowelMovements
          onClose={handleBowelMovementsCloseButtonClick}
          frequencyButtonPressed={handleFrequencyButtonClick}
          frequencyButtonClicked={frequencyButtonClicked}
          consistencyButtonPressed={handleConsistencyButtonClick}
          consistencyButtonClicked={consistencyButtonClicked}
          otherButtonPressed={handleOtherButtonClick}
          otherButtonClicked={otherButtonClicked}
        />
      )}
      {showFrequencyPopUp && (
        <Frequency onClose={handleFrequencyButtonCloseClick} />
      )}
      {showConsistencyPopUp && (
        <Consistency onClose={handleConsistencyButtonCloseClick} />
      )}
      {showOtherPopUp && <Other onClose={handleOtherButtonCloseClick} />}
      {showWellbeingAndExercisePopup && (
        <WellbeingAndExercise
          onClose={handleWellbeingAndExerciseCloseButtonClick}
          mentalHealthButtonPressed={handleMentalHealthButtonClick}
          mentalHealthButtonClicked={mentalHealthButtonClicked}
          exerciseFrequencyButtonPressed={handleExerciseFrequencyButtonClick}
          exerciseFrequencyButtonClicked={exerciseFrequencyButtonClicked}
          exerciseIntensityButtonPressed={handleExerciseIntensityButtonClick}
          exerciseIntensityButtonClicked={exerciseIntensityButtonClicked}
          sleepButtonPressed={handleSleepButtonClick}
          sleepButtonClicked={sleepButtonClicked}
        />
      )}
      {showMentalHealthPopUp && (
        <MentalHealth onClose={handleMentalHealthButtonCloseClick} />
      )}
      {showExerciseFrequencyPopUp && (
        <ExerciseFrequency onClose={handleExerciseFrequencyButtonCloseClick} />
      )}
      {showExerciseIntensityPopUp && (
        <ExerciseIntensity onClose={handleExerciseIntensityButtonCloseClick} />
      )}
      {showSleepPopUp && <Sleep onClose={handleSleepButtonCloseClick} />}
      {showOtherLogPopup && (
        <ViewOtherLog onClose={handleOtherLogCloseButtonClick} otherLogText={otherLogText}/>
      )}
      {showBurgerMenu && <BurgerMenu HandleTestPressed={HandleTestPressed} HandleLearnPressed={HandleLearnPressed} HandleMakeALog={HandleMakeALog} HandleViewLogPressed={HandleViewLogPressed} HandleAnalyticsPressed={HandleAnalyticsPressed}/>}
      {showUserMenu && <UserMenu />}

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ display: "flex" }}>
          <div style={{ zIndex: showBurgerMenu ? "999" : "auto" }}>
            <Hamburger
              className="hamburger"
              size={45}
              rounded
              color="#1a8cff"
              toggled={burgerMenuActive}
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu
                  setShowBurgerMenu(true);
                  setIsBurgerMenuActive(true);
                } else {
                  // close a menu
                  setShowBurgerMenu(false);
                  setIsBurgerMenuActive(false);
                }
              }}
            />
          </div>
          
          <img
            style={{
              width: "55px",
              height: "55px",
              opacity: "80%",
              borderRadius: "50%",
              backgroundColor: "#8CD9CF",
              marginLeft: "10px",
            }}
            src="view.png"
            alt="Image description"
            width="50"
            height="50"
          />
          {showCalenderInstructions && (
            <p style={{
                paddingLeft: "15px"
            }}>To view what you logged on a specific day, please select that day on the calendar.</p>
          )}
        </div>
        <Calendar value={selectedDate} 
        onChange={HandleDateChange}
        tileDisabled={tileDisabled}
        className="react-calendar" />
        <p
        onClick={() => {
          if (!showUserMenu) {
            // open a menu
            setShowUserMenu(true);
          } else {
            // close a menu
            setShowUserMenu(false);
          }
        }}
          style={{ zIndex: showUserMenu ? "999" : "auto", position: "absolute", top: "0", right: "25px", cursor: "pointer" }}
          className="circular"
        >
          {getInitials()}
        </p>
      </div>

      <div
        style={{
          marginBottom: "40px",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          backgroundColor: "#8CD9CF",
          opacity: "85%",
          height: "248px",
          borderRadius: "25px",
        }}
      >
        <div>
          <div
            style={{
              paddingLeft: "70px",
              paddingTop: "13px",
            }}
          >
            <div>
              <button
                onClick={handlePhysicalSymptomButtonClick}
                className="loggingButton"
              >
                Physical Symptoms
              </button>
              <span className="buttonSpace"></span>
              <button disabled="true"
                style={{
                  opacity: button2CloseClicked ? "50%" : "100%",
                }}
                onClick={handleBowelMovementsButtonClick}
                className="loggingButton"
              >
                Bowel Movements
                {button2CloseClicked && (
                  <img
                    src="checkmark.png"
                    width="30px"
                    height="30px"
                    backgroundColor="green"
                    style={{ verticalAlign: "middle", paddingLeft: "5px" }}
                  ></img>
                )}
              </button>
            </div>
            <span className="buttonSpace"></span>
            <div>
              <button
                style={{
                  opacity: button3CloseClicked ? "60%" : "100%",
                }}
                onClick={handleAppetiteButtonClick}
                className="loggingButton"
              >
                Appetite
                {button3CloseClicked && (
                  <img
                    src="checkmark.png"
                    width="30px"
                    height="30px"
                    backgroundColor="green"
                    style={{ verticalAlign: "middle", paddingLeft: "5px" }}
                  ></img>
                )}
              </button>
              <span className="buttonSpace"></span>

              <button disabled="true"
                style={{
                  opacity: button4CloseClicked ? "60%" : "100%",
                }}
                onClick={handleWellbeingAndExerciseButtonClick}
                className="loggingButton"
              >
                Wellbeing & Exercise
                {button4CloseClicked && (
                  <img
                    src="checkmark.png"
                    width="30px"
                    height="30px"
                    backgroundColor="green"
                    style={{ verticalAlign: "middle", paddingLeft: "5px" }}
                  ></img>
                )}
              </button>
            </div>
            <span className="buttonSpace"></span>

            <div>
              <button disabled="true"
                style={{
                  opacity: button5CloseClicked ? "60%" : "100%",
                }}
                onClick={handleFoodAndSupplementsButtonClick}
                className="loggingButton"
              >
                Food & Supplements
                {button5CloseClicked && (
                  <img
                    src="checkmark.png"
                    width="30px"
                    height="30px"
                    backgroundColor="green"
                    style={{ verticalAlign: "middle", paddingLeft: "5px" }}
                  ></img>
                )}
              </button>

              <span className="buttonSpace"></span>

              <button 
                style={{
                  opacity: button6CloseClicked ? "60%" : "100%",
                }}
                onClick={handleOtherLogButtonClick}
                className="loggingButton"
              >
                Other
                {button6CloseClicked && (
                  <img
                    src="checkmark.png"
                    width="30px"
                    height="30px"
                    backgroundColor="green"
                    style={{ verticalAlign: "middle", paddingLeft: "5px" }}
                  ></img>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLogging;

import React, { useState, useEffect } from "react";
import { Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import BurgerMenu from "./BurgerMenu";
import PhysicalSymptomsAnalytics from "./PhysicalSymptomsAnalytics";

const Analytics = () => {
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

  
  useEffect(() => {
    showCalenderInstructionsHandler();
  }, []);
   const [showCalenderInstructions, setShowCalenderInstructions] = useState(false);

  const showCalenderInstructionsHandler = () => {
    setShowCalenderInstructions(true);
    setTimeout(() => setShowCalenderInstructions(false), 10000);  //hide after 3 secs
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
  



  return (
    <div fluid className="loggingBox">
            {showBurgerMenu && <BurgerMenu HandleTestPressed={HandleTestPressed} HandleLearnPressed={HandleLearnPressed} HandleMakeALog={HandleMakeALog} HandleViewLogPressed={HandleViewLogPressed} HandleAnalyticsPressed={HandleAnalyticsPressed}/>}

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
            src="analytics.png"
            alt="Image description"
            width="50"
            height="50"
          />
          {showCalenderInstructions && (
            <p style={{
                paddingLeft: "15px"
            }}>Welcome to analytics! </p>
          )}
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
        </div>
        <PhysicalSymptomsAnalytics />
    </div>
  );
};

export default Analytics;

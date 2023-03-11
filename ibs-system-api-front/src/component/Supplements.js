import React from "react";
import { useState } from "react";

const TriggerFood = (props) => {
  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  };
  const [button1Color, setButton1Color] = useState("#8CD9CF"); //green
  function handleSymptom1ButtonClicked() {
    //if any of the other buttons are clicked, turn them back to green
    if (button1Color === "#8CD9CF") {
      //green
      setButton1Color("#4da6ff"); //blue
    } else {
      setButton1Color("#8CD9CF");
    }

    if (button2Color === "#4da6ff") setButton2Color("#8CD9CF");
    if (button3Color === "#4da6ff") setButton3Color("#8CD9CF");
  }

  const [button2Color, setButton2Color] = useState("#8CD9CF"); //green

  function handleSymptom2ButtonClicked() {
    if (button2Color === "#8CD9CF") {
      //green
      setButton2Color("#4da6ff"); //blue
    } else {
      setButton2Color("#8CD9CF");
    }

    if (button1Color === "#4da6ff") setButton1Color("#8CD9CF");
    if (button3Color === "#4da6ff") setButton3Color("#8CD9CF");
  }

  const [button3Color, setButton3Color] = useState("#8CD9CF"); //green

  function handleSymptom3ButtonClicked() {
    if (button3Color === "#8CD9CF") {
      //green
      setButton3Color("#4da6ff"); //blue
    } else {
      setButton3Color("#8CD9CF");
    }
    if (button2Color === "#4da6ff") setButton2Color("#8CD9CF");
    if (button1Color === "#4da6ff") setButton1Color("#8CD9CF");
  }

  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div
        className="Popup-content"
        style={{
          width: "500px",
          height: "420px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        <div style={{}}>
          <h2
            style={{
              margin: "0 0 0 0",
              paddingLeft: "175px",
            }}
          >
            Supplements
          </h2>
          <br />
          <p
            style={{
              margin: "0 0 10px 0",
              textAlign: "center",
            }}
          >
            Log any supplements you are currently taking.
          </p>
          <p
            style={{
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            The correct supplement regime can help to manage digestive symptoms. People with digestive issues are at greater risk for nutrient deficiencies as the body is unable to process and break down food efficiently. Supplementation accompanied by a varied diet can help to improve digestion, regulate bowel movements, and improve physical symptoms and overall wellbeing.

          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <textarea
            style={{
              width: "450px",
              height: "100px",
              borderRadius: "15px",
              borderColor: "#1a8cff",
              borderWidth: "2px"
            }}
          ></textarea>
        </div>

        <div
          style={{
            paddingLeft: "210px",
          }}
        >
          <div
            style={{
              borderRadius: "25px",
              width: "70px",
              height: "40px",
              borderColor: "#1a8cff",
              boxShadow: "none",
              backgroundColor: "#1a8cff",
              opacity: "75%",
              color: "white",
            }}
          >
            <p
              onClick={handleCloseClick}
              style={{
                position: "relative",
                top: "7px",
                left: "15px",
                cursor: "pointer",
              }}
            >
              Done
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriggerFood;

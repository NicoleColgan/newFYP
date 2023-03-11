import React, { useState, useEffect } from "react";

const BurgerMenu = (props) => {
  
  const [button1Color, setButton1Color] = useState("#8CD9CF"); //green

  function handleSymptom1ButtonClicked() {
    if (button1Color === "#8CD9CF") {
      //green
      setButton1Color("#4da6ff"); //blue
    } else {
      setButton1Color("#8CD9CF");
    }
  }

  return (
    <div className="BurgerPopUp">
      <div className="Popup-overlay"></div>
      <div
        className="BurgerPopup-content"
        style={{
          width: "330px",
          height: "420px",
          backgroundColor: "white",
          borderRadius: "25px",
          marginLeft: 0
        }}
      >
        <div
          style={{
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              onClick={handleSymptom1ButtonClicked}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button1Color,
                paddingTop: "8px",
                float: "left",
                marginRight: "10px",
              }}
              src="write.png"
              alt="Image description"
              width="50"
              height="50"
            />
            <p style={{ width: "calc(100% - 75px)" }}>Make a log</p>
          </div>
        </div>

        <div
          style={{
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              onClick={1}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button1Color,
                paddingTop: "8px",
                float: "left",
                marginRight: "10px",
              }}
              src="view.png"
              alt="Image description"
            />
            <p style={{ width: "calc(100% - 75px)" }}>View a log</p>
          </div>
        </div>

        <div
          style={{
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              onClick={1}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button1Color,
                paddingTop: "8px",
                float: "left",
                marginRight: "10px",
              }}
              src="analytics.png"
              alt="Image description"
            />
            <p style={{ width: "calc(100% - 75px)" }}>View analytics</p>
          </div>
        </div>
        
        <div
          style={{
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              onClick={handleSymptom1ButtonClicked}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button1Color,
                paddingTop: "8px",
                float: "left",
                marginRight: "10px",
              }}
              src="learn.png"
              alt="Image description"
            />
            <p style={{ width: "calc(100% - 75px)" }}>Learn about your condition</p>
          </div>
        </div>
        <div
          style={{
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              onClick={1}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button1Color,
                paddingTop: "8px",
                float: "left",
                marginRight: "10px",
              }}
              src="numbers.png"
              alt="Image description"
            />
            <p style={{ width: "calc(100% - 75px)" }}>Test yourself</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default BurgerMenu;

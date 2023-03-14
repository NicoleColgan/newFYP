import React, { useState, useEffect } from "react";

const BurgerMenu = (props) => {
  

  function handleMakeALogButtonClicked() {
      props.HandleMakeALog();
  }
  function handleViewALogButtonClicked(){
    props.HandleViewLogPressed();
  }

  function handleViewAnalyticsButtonClicked(){
    props.HandleAnalyticsPressed();
  }
  //handleLearnButtonClicked
  function handleLearnButtonClicked(){
    props.HandleLearnPressed();
  }
  function handleTestButtonClicked(){
    props.HandleTestPressed();
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
              onClick={handleMakeALogButtonClicked}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: "#8CD9CF",
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
              onClick={handleViewALogButtonClicked}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: "#8CD9CF",
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
              onClick={handleViewAnalyticsButtonClicked}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: "#8CD9CF",
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
              onClick={handleLearnButtonClicked}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: "#8CD9CF",
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
              onClick={handleTestButtonClicked}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: "#8CD9CF",
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

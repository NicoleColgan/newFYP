import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const UserMenu = (props) => {
  
  const [button1Color, setButton1Color] = useState("#8CD9CF"); //green

  const navigate = useNavigate();
  function HandleSettingsButtonClicked() {
    if (button1Color === "#8CD9CF") {
      //green
      setButton1Color("#4da6ff"); //blue
    } else {
      setButton1Color("#8CD9CF");
    }
  }

  function HandleLogout(){
    navigate("/landing");
  }

  return (
    <div className="BurgerPopUp">
      <div className="Popup-overlay"></div>
      <div
        className="UserMenuPopup-content"
        style={{
          width: "155px",
          height: "165px",
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
            <p style={{ paddingRight:"10px" }}>Settings</p>
            <img
              onClick={HandleSettingsButtonClicked}
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
              src="settings.png"
              alt="Image description"
              width="50"
              height="50"
            />
            
          </div>
        </div>

        <div
          style={{
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ paddingRight: "12px" }}>Log out</p>
            <img
              onClick={HandleLogout}
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
              src="waving.png"
              alt="Image description"
            />
            
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserMenu;

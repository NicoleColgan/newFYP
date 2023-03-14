import React from "react";
import { useState } from "react";

const Other = (props) => {
  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  };
  
  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div
        className="Popup-content"
        style={{
          width: "500px",
          height: "330px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        <div style={{}}>
          <h2
            style={{
              margin: "0 0 0 0",
              paddingLeft: "210px",
            }}
          >
            Other
          </h2>
          <br />
          
          <p
            style={{
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            Enter notes about the urgency of your bowl movements, potential triggers, or other factors that you feel may exacerbated your stool symptoms.
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
            paddingLeft: "215px",
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

export default Other;

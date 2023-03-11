import React from "react";
import { useState } from "react";

const TriggerFood = (props) => {
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
          height: "355px",
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
            Trigger foods
          </h2>
          <br />
          <p
            style={{
              margin: "0 0 10px 0",
              textAlign: "center",
            }}
          >
            Log any foods that you think may have exacerbated your symptoms.{" "}
          </p>
          <p
            style={{
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            Common trigger foods include dairy, wheat, spicy foods, and foods
            higher in fibre. By making adjustments to your diet, you can reduce your symptoms and improve your overall wellbeing.
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

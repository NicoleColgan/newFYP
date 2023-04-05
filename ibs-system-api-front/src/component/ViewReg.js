import React from 'react'
import { useState, useEffect } from 'react';
import LogService from "../services/LogService";

const ViewReg = (props) => {
    function handleCloseClick() {
        props.onClose();
    }
    const button1Color=props.inconsistentMealPatternsButtonColour;

    const button2Color = props.consistentMealPatternsButtonColour;

  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div
        className="Popup-content"
        style={{
          width: "500px",
          height: "400px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
          }}
        >
          <h2
            style={{
              margin: "0 0 0 0",
              paddingLeft: "160px"
            }}
          >
            Meal regularity
          </h2>
          <br/>
          <p style={{
              margin: "0 0 10px 0",
              textAlign: "center"
            }}>Log whether or not you have eaten a consistent number of meals at consistent times to your usual schedule.</p> 
            <p style={{
              margin: "0 0 30px 0",
              textAlign: "center"
            }}>Eating a consistent number of meals at similar times every day can help to regulate your digestive system and reduce IBS symptoms.</p>
        </div>
        

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
         <div style={{
          paddingRight: "50px"
         }}>  
          <div
            style={{
              paddingLeft: "60px"
            }}
          >
            <img
              style={{
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button1Color,
                paddingTop: "8px",
              }}
              src="x.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div> 
            <p>Inconsistent meal patterns</p>
          </div>

          <div>  
          <div
            style={{
              paddingLeft: "45px"
            }}
          >
            <img
              style={{
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button2Color,
                paddingTop: "8px",
              }}
              src="tick.png"
              alt="Image description"
              width="50"
              height="50"
            />
           
            </div>
             <p>Consistent meal patterns</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          
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
  )
}

export default ViewReg;
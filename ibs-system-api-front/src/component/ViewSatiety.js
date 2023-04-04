import React from 'react'
import { useState, useEffect } from 'react';
import LogService from "../services/LogService";

const ViewSatiety = (props) => {
    function handleCloseClick() {
        props.onClose();
    }
    const button1Color=props.lowSatietyButtonColour;

    const button2Color = props.normalSatietyButtonColour;

    const button3Color = props.highSatietyButtonColour;

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
              paddingLeft: "200px"
            }}
          >
            Satiety
          </h2>
          <br/>
          <p style={{
              margin: "0 0 10px 0",
              textAlign: "center"
            }}> Note how full you feel after meals and throughout the day. </p>
            <p style={{
              margin: "0 0 30px 0",
              textAlign: "center"
            }}>
            Eating until you're overly full or not eating enough can trigger IBS symptoms, so it's important to stop eating when you feel comfortably full</p>
        </div>
        

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
         <div>  
          <div
            style={{
              paddingRight: "20px",
              paddingLeft: "8px"
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
            <p>Low Satiety</p>
          </div>

          <div style={{
            paddingLeft: "20px",
            paddingRight: "30px"
          }}>
          <div
            style={{
              paddingRight: "20px",
              paddingLeft: "20px",

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
              src="questionMark.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p style={{
            
            }}>Normal satiety</p>
            
          </div>

          <div>
          <div style={{
            paddingLeft: "12px"
          }}>
            <img
              style={{
                width: "65px",
                opacity: "80%",
                height: "65px",
                borderRadius: "50%",
                backgroundColor: button3Color,
                paddingTop: "8px",
              }}
              src="tick.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p>High satiety</p>
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

export default ViewSatiety;
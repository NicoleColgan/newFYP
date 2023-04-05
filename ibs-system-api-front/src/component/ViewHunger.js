import React from 'react'
import { useState, useEffect } from 'react';
import LogService from "../services/LogService";

const ViewHunger = (props) => {
      
    function handleCloseClick() {
        props.onClose();
    }
    const button1Color=props.lessHungryButtonColour;

    const button2Color = props.normalButtonColour;

    const button3Color = props.moreHungryButtonColour;

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
            Hunger
          </h2>
          <br/>
          <p style={{
              margin: "0 0 10px 0",
              textAlign: "center"
            }}> Rate your hunger levels before and after a meal.</p> 
            <p style={{
              margin: "0 0 30px 0",
              textAlign: "center"
            }}>Eating when your very hungry can worsen your symptoms and lead to overeating. If your less hungry than usual, it could be a sign that your digestion is not optimal.</p>
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
            paddingRight: "11px"
         }}>  
          <div
            style={{
              paddingRight: "50px",
              paddingLeft: "10px"
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
            <p>Less hungry</p>
          </div>

          <div style={{
            paddingRight: "20px"
          }}>
          <div
            style={{
              paddingRight: "30px",
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
            <p style={{
                paddingLeft: "5px"
            }}>Normal</p>
            </div>
          </div>

          <div>
          <div style={{
            paddingLeft: "15px"
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
            <p>More hungry</p>
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

export default ViewHunger;
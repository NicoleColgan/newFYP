import React, { useState, useEffect } from "react";
import LogService from "../services/LogService";

const ViewLoggingPhysicalSymptom = (props) => {

//cant select the buttons anymore
  function handleCloseClick() {
        props.onClose();
    }


  const button1Color=props.bloatingButtonColour;

  const button2Color = props.headachesButtonColour;

  const button3Color = props.gasButtonColour;

  const button4Color = props.acneButtonColour;

  const button5Color= props.lowEnergyButtonColour;

  const button6Color = props.stressButtonColour;

  return (
    <div className="Popup">
      <div className="Popup-overlay"></div>
      <div
        className="Popup-content"
        style={{
          width: "400px",
          height: "490px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <h2
            style={{
              paddingBottom: "20px",
            }}
          >
            Physical Symptoms
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px"
          }}
        >
          <div style={{
            padding: "10px"
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
                backgroundColor: button1Color,
                paddingTop: "8px",
              }}
              src="bloating.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p>Bloating</p>
          </div>

          <div  style={{
            padding: "10px"
          }}>
          <div
            style={{
              paddingRight: "25px",
              paddingLeft: "5px"
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
              src="headaches.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p>Headaches</p>
          </div>

          <div  style={{
            padding: "10px"
          }}>
          <div style={{
            paddingLeft: "10px"
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
              src="gas.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p style={{
              paddingLeft:"30px"
            }}>Gas</p>
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

          <div  style={{
            padding: "10px"
          }}>
          <div
            style={{
              paddingRight: "30px",
            }}
          >
            <img
              style={{
                width: "65px",
                opacity: "80%",
                height: "65px",
                borderRadius: "50%",
                backgroundColor: button4Color,
                paddingTop: "8px",
              }}
              src="acne.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p style={{
              paddingLeft: "11px"
            }}>Acne</p>
          </div>

          <div  style={{
            padding: "10px"
          }}>
          <div
            style={{
              paddingRight: "25px",
              paddingLeft: "5"
            }}
          >
            <img
              style={{
                opacity: "80%",
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                backgroundColor: button5Color,
                paddingTop: "8px",
              }}
              src="tired4.png"
              alt="Image description"
              width="40"
              height="40"
            />
            </div>
            <p>Low Energy</p>
          </div>

          <div  style={{
            padding: "10px",
            paddingLeft: "10px"
          }}>
          <div style={{
            paddingLeft:"12px"
          }}>
            <img
              style={{
                width: "65px",
                opacity: "80%",
                height: "65px",
                borderRadius: "50%",
                backgroundColor: button6Color,
                paddingTop: "8px",
              }}
              src="stress.png"
              alt="Image description"
              width="45"
              height="45"
            />
            </div>
            <p style={{
              paddingLeft: "22px"
            }}>Stress</p>
          </div>
        </div>


        
        <div
          style={{
            paddingLeft: "170px",
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

export default ViewLoggingPhysicalSymptom;

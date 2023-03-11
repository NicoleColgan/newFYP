import React, { useState } from "react";

const BowelMovements = (props) => {
  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  };

  //frequency
  //if it was clicked, make it blue, if not, make it green
  const [button1Color, setButton1Color] = useState(
    props.frequencyButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  
  function handleFrequencyButtonClick(){
    //when done change colour to say its logged
    setButton1Color('#4da6ff')
    props.frequencyButtonPressed();
  }

  //Consistency
  const [button2Color, setButton2Color] = useState(
    props.consistencyButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleConsistencyButtonClick(){
    //when done change colour to say its logged
    setButton2Color('#4da6ff')
    props.consistencyButtonPressed();
  }

  //Other
  const [button3Color, setButton3Color] = useState(
    props.otherButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleOtherButtonClick(){
    //when done change colour to say its logged
    setButton3Color('#4da6ff')
    props.otherButtonPressed();
  }
  

  
  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div
        className="Popup-content"
        style={{
          width: "400px",
          height: "330px",
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
              paddingBottom: "20px"
            }}
          >
            Bowel movements
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
              paddingLeft: "3px"
            }}
          >
            <img
              onClick={handleFrequencyButtonClick}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button1Color,
                paddingTop: "8px",
              }}
              src="numbers.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p>Frequency</p>
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
              onClick={handleConsistencyButtonClick}
              style={{
                cursor: "pointer",
                width: "65px",
                height: "65px",
                opacity: "80%",
                borderRadius: "50%",
                backgroundColor: button2Color,
                paddingTop: "8px",
              }}
              src="poo2.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p>Consistency </p>
          </div>

          <div  style={{
            padding: "10px"
          }}>
          <div style={{
            paddingLeft: "15px"
          }}>
            <img
              onClick={handleOtherButtonClick}
              style={{
                cursor: "pointer",
                width: "65px",
                opacity: "80%",
                height: "65px",
                borderRadius: "50%",
                backgroundColor: button3Color,
                paddingTop: "8px",
              }}
              src="dot.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p style={{
              paddingLeft:"30px"
            }}>Other</p>
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

export default BowelMovements;

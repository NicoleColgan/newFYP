import React, { useState, useEffect } from "react";
import LogService from "../services/LogService";

const LoggingPhysicalSymptom = (props) => {

  const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const todayStr = `${year}-${month}-${day}`;

const [logData, setLogData] = useState({
  logEntity: "",
  data: ""
})
const [readyToSubmit, setReadyToSubmit]=useState(false);
const [renderCount, setRenderCount] = useState(0);
  async function handleCloseClick() {

    
    console.log("token id: "+JSON.parse(localStorage.getItem("token")).id);
    //make a new log 
    //check if any buttons are blue because that means theyre selected
    if(button1Color === "#4da6ff" || button2Color === "#4da6ff" || button3Color === "#4da6ff" || button4Color === "#4da6ff" || button5Color === "#4da6ff" || button6Color === "#4da6ff"){
      //there is something to log
      //if they selected physical symptom, they can have differerent data
      console.log("log before saving: "+props.log);
      try {
        await props.setLog({
            userId: JSON.parse(localStorage.getItem("token")).id,
            date: todayStr,
            logType: "Physical Symptom",
            logDataEntities: await addLogData()
          });
        // props.setLog({
        //   userId: JSON.parse(localStorage.getItem("token")).id,
        //   date: todayStr,
        //   logType: "PhysicalSymptom",
        //   logDataEntities: []
        // });

        props.onClose();
        
      } catch (error) {
        console.error(error);
      }
    }
    //passed the function to this compopnent
    
  };

  async function addLogData(){
    var logDataEntities=[];
    if(button1Color === "#4da6ff"){ // bloating was pressed 
      logDataEntities.push({ data: "Bloating" });
    }
    if(button2Color === "#4da6ff"){
      logDataEntities.push({ data: "Headaches" });
    }
    if(button3Color === "#4da6ff"){
      logDataEntities.push({ data: "Gas" });
    }
    if(button4Color === "#4da6ff"){
      logDataEntities.push({ data: "Acne" });
    }
    if(button5Color === "#4da6ff"){
      logDataEntities.push({ data: "Low Energy" });
    }
    if(button6Color === "#4da6ff"){
      logDataEntities.push({ data: "Stress" });
    }
    return logDataEntities;
  }

  useEffect(() => {
    const saveLogAndSetLogData = async () => {
      if (props.log.userId !== "" && props.log.date !== "" && props.log.logType !== "" && props.log.logDataEntities !== "") {
        const loggedItem = await LogService.saveLog(props.log);
        //have to convert logged item into a string because locaStorage holds strings
        localStorage.setItem("logged", JSON.stringify(loggedItem.data));
      }
    }
    saveLogAndSetLogData();
  }, [props.log]);
  

  //the useEfect button can watch out for changes on an item and do something when it changes
  //the item in the square brackets at the end specifies the dependencies
  //i.e. only change when this item changes
  // 
  const [button1Color, setButton1Color] = useState("#8CD9CF"); //green

  function handleSymptom1ButtonClicked() {
    if (button1Color === "#8CD9CF") {
      //green
      setButton1Color("#4da6ff"); //blue
    } else {
      setButton1Color("#8CD9CF");
    }
  }

  const [button2Color, setButton2Color] = useState("#8CD9CF"); //green

  function handleSymptom2ButtonClicked() {
    if (button2Color === "#8CD9CF") {
      //green
      setButton2Color("#4da6ff"); //blue
    } else {
      setButton2Color("#8CD9CF");
    }
  }

  const [button3Color, setButton3Color] = useState("#8CD9CF"); //green

  function handleSymptom3ButtonClicked() {
    if (button3Color === "#8CD9CF") {
      //green
      setButton3Color("#4da6ff"); //blue
    } else {
      setButton3Color("#8CD9CF");
    }
  }

  const [button4Color, setButton4Color] = useState("#8CD9CF"); //green

  function handleSymptom4ButtonClicked() {
    if (button4Color === "#8CD9CF") {
      //green
      setButton4Color("#4da6ff"); //blue
    } else {
      setButton4Color("#8CD9CF");
    }
  }

  const [button5Color, setButton5Color] = useState("#8CD9CF"); //green

  function handleSymptom5ButtonClicked() {
    if (button5Color === "#8CD9CF") {
      //green
      setButton5Color("#4da6ff"); //blue
    } else {
      setButton5Color("#8CD9CF");
    }
  }

  const [button6Color, setButton6Color] = useState("#8CD9CF"); //green

  function handleSymptom6ButtonClicked() {
    if (button6Color === "#8CD9CF") {
      //green
      setButton6Color("#4da6ff"); //blue
    } else {
      setButton6Color("#8CD9CF");
    }
  }
  return (
    <div className=" Popup">
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
              textDecoration: "underline",
            }}
          >
            Physical symptom
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
              onClick={handleSymptom1ButtonClicked}
              style={{
                cursor: "pointer",
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
              onClick={handleSymptom2ButtonClicked}
              style={{
                cursor: "pointer",
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
              onClick={handleSymptom3ButtonClicked}
              style={{
                cursor: "pointer",
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
              onClick={handleSymptom4ButtonClicked}
              style={{
                cursor: "pointer",
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
              onClick={handleSymptom5ButtonClicked}
              style={{
                cursor: "pointer",
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
              onClick={handleSymptom6ButtonClicked}
              style={{
                cursor: "pointer",
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

export default LoggingPhysicalSymptom;

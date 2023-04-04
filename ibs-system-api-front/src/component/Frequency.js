import React from 'react'
import { useState, useEffect } from 'react';
import LogService from "../services/LogService";
const Frequency = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;
  
  async function handleCloseClick() {

    var text = document.getElementById("textArea").value;
    //check if any buttons are blue because that means we want to log something
    if(text!=""){
      //there is something to log
      //if they selected physical symptom, they can have differerent data
      //need to wait for the logData to be added before setting the log and posting it to the db
      try {
        await props.setLog({
            userId: JSON.parse(localStorage.getItem("token")).id,
            date: todayStr,
            logType: "Frequency",
            logDataEntities: [{ data: text }]
          });
        props.onClose();
      } catch (error) {
        console.error(error);
      }
    }
  };

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
  
 

  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div
        className="Popup-content"
        style={{
          width: "500px",
          height: "380px",
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
            Frequency
          </h2>
          <br />
          <p
            style={{
              margin: "0 0 10px 0",
              textAlign: "center",
            }}
          >
            Log the frequency of your bowel movements.{" "}
          </p>
          <p
            style={{
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            Normal bowel movement frequency is 3 times per week to twice per day, but the goal is to get to having a daily bowl movement. Having too many or too little bowl movements can lead to nutrient deficiencies, hormonal imbalances, and unpleasant physical symptoms.
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
          <textarea id = "textArea"
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

export default Frequency;

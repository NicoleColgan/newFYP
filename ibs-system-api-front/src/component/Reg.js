import React from 'react'
import { useState, useEffect } from 'react';
import LogService from "../services/LogService";

const Reg = (props) => {
      

  
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;
  
  async function handleCloseClick() {

    //check if any buttons are blue because that means we want to log something
    if(button1Color === "#4da6ff" || button2Color === "#4da6ff" ){
      //there is something to log
      //if they selected physical symptom, they can have differerent data
      //need to wait for the logData to be added before setting the log and posting it to the db
      try {
        await props.setLog({
            userId: JSON.parse(localStorage.getItem("token")).id,
            date: todayStr,
            logType: "Meal regularity",
            logDataEntities: await addLogData()
          });
        props.onClose();
      } catch (error) {
        console.error(error);
      }
    }
  };

  async function addLogData(){
    var logDataEntities=[];
    if(button1Color === "#4da6ff"){ // bloating was pressed 
      logDataEntities.push({ data: "Inconsistent meal patterns" });
    }
    if(button2Color === "#4da6ff"){
      logDataEntities.push({ data: "Consistent meal patterns" });
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
  
  const [button1Color, setButton1Color] = useState('#8CD9CF');  //green
  function handleSymptom1ButtonClicked(){
    //if any of the other buttons are clicked, turn them back to green
    if(button1Color==='#8CD9CF'){  //green
        setButton1Color('#4da6ff');  //blue
      } 
      else {
        setButton1Color('#8CD9CF')
      }
  
      if(button2Color==='#4da6ff')
          setButton2Color('#8CD9CF');
    
  }

  const [button2Color, setButton2Color] = useState('#8CD9CF');  //green

  function handleSymptom2ButtonClicked(){
    if(button2Color==='#8CD9CF'){  //green
      setButton2Color('#4da6ff');  //blue
    } 
    else {
      setButton2Color('#8CD9CF')
    }

    if(button1Color==='#4da6ff')
        setButton1Color('#8CD9CF');
    
  }


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

export default Reg
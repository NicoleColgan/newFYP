import React from 'react'
import { useState, useEffect } from 'react';
import LogService from "../services/LogService";

const Fibre = (props) => {
      

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;
  
  async function handleCloseClick() {

    //check if any buttons are blue because that means we want to log something
    if(button1Color === "#4da6ff" || button2Color === "#4da6ff" || button3Color === "#4da6ff" ){
      //there is something to log
      //if they selected physical symptom, they can have differerent data
      //need to wait for the logData to be added before setting the log and posting it to the db
      try {
        await props.setLog({
            userId: JSON.parse(localStorage.getItem("token")).id,
            date: todayStr,
            logType: "Fiber",
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
      logDataEntities.push({ data: "Inadequate intake" });
    }
    if(button2Color === "#4da6ff"){
      logDataEntities.push({ data: "Adequate intake" });
    }
    if(button3Color === "#4da6ff"){
      logDataEntities.push({ data: "Excessive intake" });
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
      if(button3Color==='#4da6ff')
          setButton3Color('#8CD9CF');
    
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
    if(button3Color==='#4da6ff')
        setButton3Color('#8CD9CF');
    
  }

    const [button3Color, setButton3Color] = useState('#8CD9CF');  //green

  function handleSymptom3ButtonClicked(){
    if(button3Color==='#8CD9CF'){  //green
      setButton3Color('#4da6ff');  //blue
    } 
    else {
      setButton3Color('#8CD9CF')
    }
    if(button2Color==='#4da6ff')
        setButton2Color('#8CD9CF');
    if(button1Color==='#4da6ff')
        setButton1Color('#8CD9CF');
    
  }

  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div
        className="Popup-content"
        style={{
          width: "510px",
          height: "475px",
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
              paddingLeft: "220px"
            }}
          >
            Fiber
          </h2>
          <br/>
          <p style={{
              margin: "0 0 10px 0",
              textAlign: "center"
            }}>Log the ammount of fiber you consumed throughout the day. </p>
            <p style={{
              margin: "0 0 30px 0",
              textAlign: "center"
            }}>
            Consuming the correct amount of fibre can be helpful in managing your symptoms. Fibre helps to feed the beneficial bacteria in the gut and prevent constipation as it bulks up the stool, regulating bowl movements. It’s important to note that too much fibre can worsen symptoms for some people, so it is important to gradually increase your intake and drink plenty of water to help the body to adjust.
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
         <div style={{
          paddingLeft: "20px"
         }}>  
          <div
            style={{
              paddingRight: "20px",
              paddingLeft: "25px"
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
            <p>Inadequate intake (less than 25g)</p>

          </div>

          <div style={{
            paddingLeft: "20px",
            paddingRight: "30px"
          }}>
          <div
            style={{
              paddingRight: "20px",
              paddingLeft: "32px",

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
              src="questionMark.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p style={{
            
            }}>Adequate intake (25-38g per day)</p>
            
          </div>

          <div>
          <div style={{
            paddingLeft: "24px"
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
              src="tick.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p>Excessive intake (more than 38g)</p>
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

export default Fibre
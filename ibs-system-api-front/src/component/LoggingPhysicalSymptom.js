import React, { useState } from "react";

const LoggingPhysicalSymptom = () => {
  
  const [button1Color, setButton1Color] = useState('#8CD9CF');  //green

  function handleSymptom1ButtonClicked(){
    if(button1Color==='#8CD9CF'){  //green
      setButton1Color('#4da6ff');  //blue
    } 
    else {
      setButton1Color('#8CD9CF')
    }
  }

  const [button2Color, setButton2Color] = useState('#8CD9CF');  //green

  function handleSymptom2ButtonClicked(){
    if(button2Color==='#8CD9CF'){  //green
      setButton2Color('#4da6ff');  //blue
    } 
    else {
      setButton2Color('#8CD9CF')
    }
  }

    const [button3Color, setButton3Color] = useState('#8CD9CF');  //green

  function handleSymptom3ButtonClicked(){
    if(button3Color==='#8CD9CF'){  //green
      setButton3Color('#4da6ff');  //blue
    } 
    else {
      setButton3Color('#8CD9CF')
    }
  }

    const [button4Color, setButton4Color] = useState('#8CD9CF');  //green

  function handleSymptom4ButtonClicked(){
    if(button4Color==='#8CD9CF'){  //green
      setButton4Color('#4da6ff');  //blue
    } 
    else {
      setButton4Color('#8CD9CF')
    }
  }

    const [button5Color, setButton5Color] = useState('#8CD9CF');  //green

  function handleSymptom5ButtonClicked(){
    if(button5Color==='#8CD9CF'){  //green
      setButton5Color('#4da6ff');  //blue
    } 
    else {
      setButton5Color('#8CD9CF')
    }
  }

    const [button6Color, setButton6Color] = useState('#8CD9CF');  //green

  function handleSymptom6ButtonClicked(){
    if(button6Color==='#8CD9CF'){  //green
      setButton6Color('#4da6ff');  //blue
    } 
    else {
      setButton6Color('#8CD9CF')
    }
  }
  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div className="Popup-content"
  style={{
    width: "400px",
    height: "470px",
    backgroundColor: "white",
    borderRadius: "25px"
  }}
>
<div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "10px"
    }}
  >
  <h2
    style={{
      padding: "15px",
      textDecoration: "underline"
    }}
  >
    Log a physical symptom
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
      paddingRight: "30px"
    }}>
      <img
      onClick={handleSymptom1ButtonClicked}
        style={{
          cursor: "pointer",
          width: "65px",
          height: "65px",
          opacity: "80%",
          borderRadius: "50%",
          backgroundColor: button1Color,
          paddingTop: "8px"
        }}
        src="bloating.png"
        alt="Image description"
        width="50"
        height="50"
      />
      <p>Bloating</p>
    </div>
    <div style={{
      paddingRight: "25px"
    }}>
          <img
          onClick={handleSymptom2ButtonClicked}
            style={{
              cursor: "pointer",
              width: "65px",
              height: "65px",
              opacity: "80%",
              borderRadius: "50%",
              backgroundColor: button2Color,
              paddingTop: "8px"
            }}
            src="headaches.png"
            alt="Image description"
            width="50"
            height="50"
          />
          <p>Headaches</p>
        </div>
    <div >
      <img
      onClick={handleSymptom3ButtonClicked}
        style={{
          cursor: "pointer",
          width: "65px",
          opacity: "80%",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: button3Color,
          paddingTop: "8px"
        }}
        src="gas.png"
        alt="Image description"
        width="50"
        height="50"
      />
      <p>Gas</p>
    </div>
    
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
      paddingRight: "30px"
    }}>
      <img
      onClick={handleSymptom4ButtonClicked}
        style={{
          cursor: "pointer",
          width: "65px",
          opacity: "80%",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: button4Color,
          paddingTop: "8px"
        }}
        src="acne.png"
        alt="Image description"
        width="50"
        height="50"
      />
      <p>Acne</p>
    </div>
    <div style={{
      paddingRight: "25px"
    }}>
          <img
          onClick={handleSymptom5ButtonClicked}
            style={{
              cursor: "pointer",
              opacity: "80%",
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              backgroundColor: button5Color,
              paddingTop: "8px"
            }}
            src="tired4.png"
            alt="Image description"
            width="40"
            height="40"
          />
          <p>Low Energy</p>
        </div>
    <div >
      <img
      onClick={handleSymptom6ButtonClicked}
        style={{
          cursor: "pointer",
          width: "65px",
          opacity: "80%",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: button6Color,
          paddingTop: "8px"
        }}
        src="stress.png"
        alt="Image description"
        width="45"
        height="45"
      />
      <p>Stress</p>
    </div>
    
  </div>
  <div style={{ 
    paddingLeft: "160px"
  }}>
    <div style={{
  borderRadius: "25px",
  width: "70px",
  height: "40px",
  borderColor: "#1a8cff",
  boxShadow: "none",
  backgroundColor: "#1a8cff",
  opacity: "75%",
  color: "white",
  
}}>
  <p style={{
    position: "relative",
    top: "7px",
    left: "15px",
    cursor: "pointer"
  }} >
  Done</p></div>
</div>
</div>
</div>
  )
}

export default LoggingPhysicalSymptom
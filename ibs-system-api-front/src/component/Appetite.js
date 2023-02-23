import React, { useState } from "react";

const Apetite = (props) => {
  

  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  }
  const [button1Color, setButton1Color] = useState('#8CD9CF');  //green

  function handleHungerButtonClick(){
    if(button1Color==='#8CD9CF'){  //green
        setButton1Color('#4da6ff');  //blue
      } 
      else {
        setButton1Color('#8CD9CF')
      }
    //render new component
    //when done change colour to say its logged
    props.hungerButtonPressed();
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


  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div className="Popup-content"
  style={{
    width: "370px",
    height: "460px",
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
      padding: "10px",
      textDecoration: "underline",
      paddingBottom:"15px"
    }}
  >
    Apetite
  </h2>
</div >
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "10px",
      paddingRight: "10px"
    }}
  ><div style={{
    paddingRight: "20px"
        }}>
    <div style={{
      paddingRight: "60px",
      paddingLeft: "40px"
    }}>
        
      <img
      onClick={handleHungerButtonClick}
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
      /></div>
      <p style={{
        paddingLeft: "25px"
      }}>Hunger levels</p>
    </div>

    <div>
    <div style={{
      paddingRight: "25px",
      paddingLeft: "25px"
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
            src="satiety.png"
            alt="Image description"
            width="50"
            height="50"
          />
          
        </div>
        <p style={{
            paddingLeft: "10px"
        }}>Satiety levels</p>
        </div>

  </div>

  
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "10px",
      paddingRight: "5px"
    }}
  >
    <div style={{
        paddingRight: "25px"
    }}>
    <div style={{
      paddingRight: "55px",
      paddingLeft: "70px"
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
          paddingTop: "8px"
        }}
        src="numbers.png"
        alt="Image description"
        width="50"
        height="50"
      />
      
    </div>
    <p style={{
        paddingLeft: "40px"
    }}>Number of meals</p>
    </div>

    <div style={{
        paddingRight: "30px"
    }}>
    <div style={{
        paddingLeft:"25px"

    }}>
          <img
          onClick={handleSymptom4ButtonClicked}
            style={{
              cursor: "pointer",
              opacity: "80%",
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              backgroundColor: button4Color,
              paddingTop: "8px",
            }}
            src="time.png"
            alt="Image description"
            width="40"
            height="40"
          />
          
        </div>
    <p style={{
        paddingRight: "10px"
    }}>Meal Regularity</p>
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
  <p 
  onClick={handleCloseClick}
  style={{
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

export default Apetite;
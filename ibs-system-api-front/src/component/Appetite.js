import React, { useState } from "react";

const Apetite = (props) => {
  

  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  }

  //if it was clicked, make it blue, if not, make it green
  const [button1Color, setButton1Color] = useState(
    props.hungerButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  
  function handleHungerButtonClick(){
    //when done change colour to say its logged
    setButton1Color('#4da6ff')
    props.hungerButtonPressed();
  }

  //Satiety
  const [button2Color, setButton2Color] = useState(
    props.satietyButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleSatietyButtonClick(){
    //when done change colour to say its logged
    setButton2Color('#4da6ff')
    props.satietyButtonPressed();
  }

  //numMeals
  const [button3Color, setButton3Color] = useState(
    props.numMealsButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleNumMealsButtonClick(){
    //when done change colour to say its logged
    setButton3Color('#4da6ff')
    props.numMealsButtonPressed();
  }
  

  //meal regularity
  const [button4Color, setButton4Color] = useState(
    props.regButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleRegButtonClick(){
    //when done change colour to say its logged
    setButton4Color('#4da6ff')
    props.regButtonPressed();
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
          onClick={handleSatietyButtonClick}
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
      onClick={handleNumMealsButtonClick}
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
          onClick={handleRegButtonClick}
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
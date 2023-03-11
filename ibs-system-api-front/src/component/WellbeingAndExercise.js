import React, { useState } from "react";

const WellbeingAndExercise = (props) => {
  

  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  }

  //MentalHealth
  //if it was clicked, make it blue, if not, make it green
  const [button1Color, setButton1Color] = useState(
    props.mentalHealthButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  
  function handleMentalHealthButtonClick(){
    //when done change colour to say its logged
    setButton1Color('#4da6ff')
    props.mentalHealthButtonPressed();
  }

  //ExerciseFrequency
  const [button2Color, setButton2Color] = useState(
    props.exerciseFrequencyButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleExerciseFrequencyButtonClick(){
    //when done change colour to say its logged
    setButton2Color('#4da6ff')
    props.exerciseFrequencyButtonPressed();
  }

  //ExerciseIntensity
  const [button3Color, setButton3Color] = useState(
    props.exerciseIntensityButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleExerciseIntensityButtonClick(){
    //when done change colour to say its logged
    setButton3Color('#4da6ff')
    props.exerciseIntensityButtonPressed();
  }
  

  //Sleep
  const [button4Color, setButton4Color] = useState(
    props.sleepButtonClicked ? '#4da6ff' : '#8CD9CF'
  );
  function handleSleepButtonClick(){
    //when done change colour to say its logged
    setButton4Color('#4da6ff')
    props.sleepButtonPressed();
  }


  return (
    <div className=" Popup">
      <div className="Popup-overlay"></div>
      <div className="Popup-content"
  style={{
    width: "380px",
    height: "450px",
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
      
      paddingBottom:"15px"
    }}
  >
    Wellbeing & exercise
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


  ><div >
    <div style={{
      paddingRight: "60px",
      paddingLeft: "40px"
    }}>
        
      <img
      onClick={handleMentalHealthButtonClick}
        style={{
          cursor: "pointer",
          width: "65px",
          height: "65px",
          opacity: "80%",
          borderRadius: "50%",
          backgroundColor: button1Color,
          paddingTop: "8px"
        }}
        src="stress.png"
        alt="Image description"
        width="50"
        height="50"
      /></div>
      <p style={{
        paddingLeft: "25px"
      }}>Mental health</p>
    </div>

    <div>
    <div style={{
      paddingRight: "25px",
      paddingLeft: "42px"
    }}>
          <img
          onClick={handleExerciseFrequencyButtonClick}
            style={{
              cursor: "pointer",
              width: "65px",
              height: "65px",
              opacity: "80%",
              borderRadius: "50%",
              backgroundColor: button2Color,
              paddingTop: "8px"
            }}
            src="numbers.png"
            alt="Image description"
            width="50"
            height="50"
          />
          
        </div>
        <p style={{
            paddingLeft: "10px"
        }}>Exercise frequency</p>
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
        paddingRight:"40px"
    }}>
    <div style={{
      paddingRight: "55px",
      paddingLeft: "70px"
    }}>
      <img
      onClick={handleExerciseIntensityButtonClick}
        style={{
          cursor: "pointer",
          width: "65px",
          opacity: "80%",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: button3Color,
          paddingTop: "8px"
        }}
        src="swimming.png"
        alt="Image description"
        width="50"
        height="50"
      />
      
    </div>
    <p style={{
        paddingLeft: "45px"
    }}>Exercise intensity</p>
    </div>

    <div style={{
        paddingRight:"65px"
    }}>
    <div style={{
        paddingLeft:"15px"

    }}>
          <img
          onClick={handleSleepButtonClick}
            style={{
              cursor: "pointer",
              opacity: "80%",
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              backgroundColor: button4Color,
              paddingTop: "8px",
            }}
            src="tired4.png"
            alt="Image description"
            width="40"
            height="40"
          />
          
        </div>
    <p style={{
        paddingRight: "13px",
        paddingLeft: "26px"
    }}>Sleep</p>
    </div>
    
  </div>
  <div style={{ 
    paddingLeft: "165px"
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

export default WellbeingAndExercise;
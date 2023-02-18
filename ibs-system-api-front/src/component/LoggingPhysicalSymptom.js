import React from 'react'

const LoggingPhysicalSymptom = () => {
  return (
    <div
  style={{
    width: "400px",
    height: "400px",
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
<button style={{
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  borderColor: "#1a8cff",
  boxShadow: "none",
  backgroundColor: "#1a8cff"
}}>X</button>
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
        style={{
          cursor: "pointer",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: "#8CD9CF",
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
            style={{
              cursor: "pointer",
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              backgroundColor: "#8CD9CF",
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
        style={{
          cursor: "pointer",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: "#8CD9CF",
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
        style={{
          cursor: "pointer",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: "#8CD9CF",
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
            style={{
              cursor: "pointer",
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              backgroundColor: "#8CD9CF",
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
        style={{
          cursor: "pointer",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          backgroundColor: "#8CD9CF",
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
</div>

  )
}

export default LoggingPhysicalSymptom
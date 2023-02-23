import React from 'react'
import { useState } from 'react';

const Hunger = (props) => {
      

  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  }
  const [button1Color, setButton1Color] = useState('#8CD9CF');  //green

  function handleHungerButtonClick(){
    //render new component
    //when done change colour to say its logged
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

    const [button3Color, setButton3Color] = useState('#ADE794');  //green

  function handleSymptom3ButtonClicked(){
    if(button3Color==='#ADE794'){  //green
      setButton3Color('#4da6ff');  //blue
    } 
    else {
      setButton3Color('#ADE794')
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
              textDecoration: "underline",
              margin: "0 0 0 0",
              paddingLeft: "200px"
            }}
          >
            Hunger
          </h2>
          <br/>
          <p style={{
              margin: "0 0 40px 0",
              textAlign: "center"
            }}> Rate your hunger levels before and after a meal. Eating when your very hungry can worsen your symptoms and lead to overeating. If your less hungry than usual, it could be a sign that your digestion is not optimal.</p>
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
            paddingRight: "30px"
         }}>  
          <div
            style={{
              paddingRight: "50px",
              paddingLeft: "10px"
            }}
          >
            <img
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
            <p>Less hungry</p>
          </div>

          <div style={{
            paddingRight: "20px"
          }}>
          <div
            style={{
              paddingRight: "30px",
            }}
          >
            <img
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
            <p style={{
                paddingLeft: "5px"
            }}>Normal</p>
            </div>
          </div>

          <div>
          <div style={{
            paddingLeft: "35px"
          }}>
            <img
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
            <p>Hungrier than usual</p>
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

export default Hunger
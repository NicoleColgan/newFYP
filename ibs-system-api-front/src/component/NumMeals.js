import React from 'react'
import { useState } from 'react';

const NumMeals = (props) => {
      

  const handleCloseClick = () => {
    //passed the function to this compopnent
    props.onClose();
  }
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
          width: "500px",
          height: "380px",
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
              paddingLeft: "150px"
            }}
          >
            Number of meals
          </h2>
          <br/>
          <p style={{
              margin: "0 0 10px 0",
              textAlign: "center"
            }}>Log the number of meals that you have eaten today.</p> 
            <p style={{
              margin: "0 0 30px 0",
              textAlign: "center"
            }}>Eating a consistent number of meals at a regular schedule can help to regulate your digestive system and reduce IBS symptoms.</p>
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
              src="lessThanEqual.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div> 
            <p style={{
                paddingLeft: "30px"
            }}>0-3</p>
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
            <p style={{
                paddingLeft: "19px"
            }}>4-5</p>
            </div>
          </div>

          <div>
          <div style={{
            paddingLeft: "35px"
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
              src="bigAmmount.png"
              alt="Image description"
              width="50"
              height="50"
            />
            </div>
            <p style={{
                paddingLeft:"55px"
            }}>5 +</p>
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

export default NumMeals
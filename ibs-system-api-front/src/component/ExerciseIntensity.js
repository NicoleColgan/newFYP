import React from "react";
import { useState } from "react";

const ExerciseIntensity = (props) => {
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
          height: "450px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        <div style={{}}>
          <h2
            style={{
              margin: "0 0 0 0",
              paddingLeft: "150px",
            }}
          >
            Exercise intensity
          </h2>
          <br />
          <p
            style={{
              margin: "0 0 10px 0",
              textAlign: "center",
            }}
          >
            Log the intensity of your exercise this week.
          </p>
          <p
            style={{
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            It can be beneficial to track your exercise intensity to determine if you need to change it to help manage your symptoms. Exercise is beneficial for overall health including digestive health, but it is still a form of stress on the body. Digestive issues are often brought on or aggravated by stress, so it’s important to tailer your exercise intensity to your needs.
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
          <div
            style={{
              paddingRight: "25px",
            }}
          >
            <div
              style={{
                paddingRight: "50px",
                paddingLeft: "55px",
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
            <p
              style={{
                paddingLeft: "26px",
              }}
            >
              Reduced intensity
            </p>
          </div>

          <div style={{
            paddingRight:"15px"
          }}>
            <div
              style={{
                paddingLeft:"5px"
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
              /></div>
              <p>
                Unchanged 
              </p>
            
          </div>

          <div>
            <div
              style={{
                paddingLeft: "60px",
              }}
            >
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
            <p
              style={{
                paddingLeft: "26px",
              }}
            >
              Increased intensity
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        ></div>
        <div
          style={{
            paddingLeft: "220px",
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

export default ExerciseIntensity;

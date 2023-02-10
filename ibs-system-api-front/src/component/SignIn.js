import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from 'react'

function SignIn() {
    const [user, setUser] = useState({
        id: "",
        email: "",
        password: ""
      });
    
      const [error, setError] = useState({
        //an error code of 1 means not all fields are filled in
        //2 is invaluid email format
        //error code of 0 is ok
        errorCode: 0,
        errorMessage: ""
      })
    
      //whenever theres a change (they enter a new character, update the state)
      const handleChange = (e) => {
        const value = e.target.value;
        //add new value (character to existing info stored in newUser state)
        setUser({...user,[e.target.name]: value});
      }
    
      function handleSubmit(e){
        //prevent page from refreshing and messing up data (which might affect the db)
        e.preventDefault();
        //this function should first check that the email is in the correct format
        
        //check everything isnt null
        if(user.email!=="" && user.password!==""){
          //regular expression pattern for a valid email address
          const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(!user.email.match(pattern)){
            setError({...error,errorCode: 2,errorMessage: "Invalid email format"});
          } else {
            setError({...error,errorCode: 0,errorMessage: null});
          }
        } else {
          //eventually set a pop up
          setError({...error,errorCode: 1,errorMessage: "Please fill out all fields"});
        }
        
        //then check if the email is already in the database
        //basic password auth checks that its 5 characters long
        //if its not already in the db, and its in the correct format, and password is ok, then add this user to the db
      };
    
      return (
        <div className="loginComponent"
        style={{
          width: "227px",
          height: "270px",
          paddingLeft: "50px",
          backgroundColor: "white",
          borderRadius: "25px"
      
          
        }}>
          <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              color: "#1a8cff",
              paddingLeft: "27px",
            }}>
            <h1
            style={{fontWeight: 500}}>Sign In</h1>
          </div>
          <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label className="block text-gray-600 text-sm">Email</label>
            <div style={{ display: "flex" }}>
              <input
              style={{outline: "1px solid #4da6ff",borderRadius: "25px",
            }}
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label className="block text-gray-600 text-sm">Password</label>
            <div style={{ display: "flex" }}>
              <input
              style={{outline: "1px solid #4da6ff",borderRadius: "25px",
            }}
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>
          </div>
          <br></br>
          <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            className="px-6">
            
    <button className="submitRegistrationButton" style={{borderRadius: "25px"}} type="submit">Submit</button>
          </div>
          {error.errorCode===1 ? <p
          style={{color: "#ff0000",
          paddingRight: "50px",
          fontSize: "12px"}}>Please fill out all fields</p> : null}
          {error.errorCode===2 ? <p
          style={{color: "#ff0000",
          paddingRight: "50px",
          fontSize: "12px"}}>Invalid email</p> : null}
          </form>
        </div>
      );
    }
export default SignIn;

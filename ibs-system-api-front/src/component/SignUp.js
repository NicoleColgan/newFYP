import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from 'react'
import UserService from "../services/UserService";

function SignUp() {

  //creating a state - this is the default state and these values will be set when the page is loaded intially
  //we will assign values in the input boxes to this state, so whenver something is entered into the input box, these states will be updated
  const [newUser, setNewUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
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
    setNewUser({...newUser,[e.target.name]: value});
  }

  function handleSubmit(e){
    //prevent page from refreshing and messing up data (which might affect the db)
    e.preventDefault();
    //this function should first check that the email is in the correct format

    
    //reset error
    setError({ errorCode: 0, errorMessage: "" });

    //regular expression pattern for a valid email address
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //do not proceed if there are emtpy fields
    if(newUser.firstName==="" || newUser.lastName==="" || newUser.email==="" || newUser.password===""){
      setError({errorCode: 1,errorMessage: "Please fill out all fields"});
    }
    else if(!newUser.email.match(pattern)){  //do not proceed if email is invalid
      setError({errorCode: 2,errorMessage: "Invalid email format"});
    } 
    else if(newUser.password.length<5){  //do not proceed if password doesnt match constraints
      //basic password auth checks that its 5 characters long
      setError({errorCode: 3, errorMessage: "Password must be longer than 5 characters"});
    }
    else {  //everything went ok - but still need to check if user is already in the db
      UserService.checkUserExists(newUser.email).then(data => {
        console.log(data);
        if(data){
          //user is already in db - so we dont want to add them
          setError({errorCode: 4, errorMessage: "Email Address already registered"});
        }
        else{ //able to save user to db
            UserService.saveUser(newUser).then((response) => {
          console.log("response");
          console.log(response);
          console.log(newUser);
          setError({errorCode: 0, errorMessage: ""});
        }).catch((err) => {
          console.log(err);
        });
          }
        });
    }
    //console.log("error code: ",error.errorCode);
  };

  return (
    <div className="loginComponent"
    style={{
      width: "227px",
      height: "350px",
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
        style={{fontWeight: 500}}>Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label className="text-gray-600 text-sm">First Name</label>
        <div style={{ display: "flex" }}>
          <input
          style={{
            outline: "1px solid #4da6ff",
            borderRadius: "25px",

          }}
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-5 py-10"
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
        <label className="block text-gray-600 text-sm px-10">Last Name</label>
        <div style={{ display: "flex" }}>
          <input
          style={{outline: "1px solid #4da6ff",borderRadius: "25px",
        }}
            type="text"
            name="lastName"
            value={newUser.lastName}
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
        <label className="block text-gray-600 text-sm">Email</label>
        <div style={{ display: "flex" }}>
          <input
          style={{outline: "1px solid #4da6ff",borderRadius: "25px",
        }}
            type="email"
            name="email"
            value={newUser.email}
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
            value={newUser.password}
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
      paddingRight: "52px",
      fontSize: "12px"}}>{error.errorMessage}</p> : null}
      {error.errorCode===2 || error.errorCode===3 || error.errorCode===4? <p
      style={{color: "#ff0000",
      paddingRight: "50px",
      fontSize: "12px"}}>{error.errorMessage}</p> : null}
      </form>
    </div>
  );
}

export default SignUp;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from 'react'
import UserService from "../services/UserService";
import store from "../context/UserStore";
import { useDispatch } from 'react-redux';
import { UserContext } from '../App';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function SignUp(props) {
  //remove all tokens
  localStorage.removeItem("token");
  
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSignIn(){
    props.handleSignInClicked();
  }


  const [error, setError] = useState({
    //an error code of 1 means not all fields are filled in
    //2 is invaluid email format
    //error code of 0 is ok
    errorCode: 0,
    errorMessage: ""
  })

  //whenever theres a change (they enter a new character, update the state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({...user,[e.target.name]: value});
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
    if(user.firstName==="" || user.lastName==="" || user.email==="" || user.password===""){
      setError({errorCode: 1,errorMessage: "Please fill out all fields"});
    }
    else if(!user.email.match(pattern)){  //do not proceed if email is invalid
      setError({errorCode: 2,errorMessage: "Invalid email format"});
    } 
    else if(user.password.length<5){  //do not proceed if password doesnt match constraints
      //basic password auth checks that its 5 characters long
      setError({errorCode: 3, errorMessage: "Password must be longer than 5 characters"});
    }
    else {  //everything went ok - but still need to check if user is already in the db
      UserService.checkUserExists(user.email).then(data => {
        console.log(data);
        if(data){
          //user is already in db - so we dont want to add them
          setError({errorCode: 4, errorMessage: "Email Address already registered"});
        }
        else{ //able to save user to db
          console.log(user);
          UserService.saveUser(user).then((response) => {
          console.log("response");
          console.log(response);
          console.log(user);
          setError({errorCode: 0, errorMessage: ""});
          //if all was successful, go to logging page
          navigate("/logging");
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
      height: "400px",
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
            value={user.firstName}
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
            value={user.lastName}
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
<br></br>
<button onClick={handleSignIn} className="submitRegistrationButton" style={{borderRadius: "25px"}} type="submit">Sign in</button>
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

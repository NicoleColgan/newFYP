import React from 'react'
import "../App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import LoggingPhysicalSymptom from './LoggingPhysicalSymptom';
import { UserContext } from '../App';
import { useContext } from "react";
import { useState } from 'react';


const Landing = () => {
  const { user } = useContext(UserContext);
  const [showSignIp, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  function handleSignInClicked(){
    setShowSignUp(false);
    setShowSignIn(true);
  }
  return (
    <Container fluid className="box " style={{ width: "100%", justifyContent: "flex-end" }}>
    <Col md={5} sm={5} className="column justify-content-center d-flex">
      <div className="">
        <h1 
        style={{
          color: "#1a8cff",
          fontSize: "60px",
          fontWeight: 500
          }}>THE GUT DIARY </h1>
        <h4 
        style={{
          color: "#1a8cff",
          fontWeight: 500}}>Information about the app and our goals go here</h4>
      </div>        
    </Col>
    <Col md={3} sm={3} className="column">
      {showSignUp && <SignUp handleSignInClicked={handleSignInClicked}/>}
      {showSignIp && <SignIn />}
    </Col>
</Container>
  )
}

export default Landing
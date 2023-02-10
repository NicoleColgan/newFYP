
import "./App.css";
import SignUp from "./component/SignUp";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SignIn from "./component/SignIn";

function App() {
  return (
    <Container fluid className="box " style={{ width: "100%", justifyContent: "flex-end" }}>
    <Col md={5} sm={5} className="column justify-content-center d-flex">
      <div className="">
        <h1 
        style={{
          color: "#1a8cff",
          fontSize: "60px",
          fontWeight: 500
          }}>THE GUT DIARY</h1>
        <h4 
        style={{
          color: "#1a8cff",
          fontWeight: 500}}>Information about the app and our goals go here</h4>
      </div>        
    </Col>
    <Col md={3} sm={3} className="column">
      <SignIn />
    </Col>
</Container>
  );
}

export default App;

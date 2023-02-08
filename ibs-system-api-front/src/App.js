import logo from "./logo.svg";
import "./App.css";
import SignUp from "./component/SignUp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="box " style={{ width: "100%", justifyContent: "flex-end" }}>
    <Col md={5} sm={5} className="column justify-content-center d-flex">
      <div className="">
        <h1 style={{color: "#1a8cff"}}>The Gut Diary</h1>
        <h5 style={{color: "#1a8cff"}}>Information about the app and our goals go here</h5>
      </div>        
    </Col>
    <Col md={3} sm={3} className="column">
      <SignUp />
    </Col>
</Container>
  );
}

export default App;

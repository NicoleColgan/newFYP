import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignIn() {
  return (
    <div className="loginComponent"
    style={{
      width: "227px",
      height: "275px",
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
            name="emailId"
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
        
<button className="submitRegistrationButton"
style={{borderRadius: "25px"}}>Submit</button>
      </div>
      <a style={{fontWeight: 400,
      fontSize: "12px",
      paddingLeft: "30px"}}>Forgot password?</a>
    </div>
  );
}

export default SignIn;

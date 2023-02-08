import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp() {
  return (
    <div className="loginComponent">
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "#1a8cff"
        }}>
        <h1>Sign In</h1>
      </div>
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
          style={{outline: "1px solid #4da6ff"}}
            type="text"
            name="firstName"
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
          style={{outline: "1px solid #4da6ff"}}
            type="text"
            name="lastName"
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
          style={{outline: "1px solid #4da6ff"}}
            type="email"
            name="emailId"
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
        
<button className="submitRegistrationButton">Submit</button>
      </div>
    </div>
  );
}

export default SignUp;

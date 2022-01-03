import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const handleChange = () => console.log("object");

  return (
    <div className="container">
      <form>
        <h1>Login Form</h1>
		<div className="form-group">
          <label className="label">Username</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="text"
			className="form-control"
            value={password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
		<button className="btn btn-primary">Submit</button>
		
      </form>
    </div>
  );
}

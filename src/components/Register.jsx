import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  const [name, setname] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const handleChange = () => console.log("object");

  return (
    <div className="container">
      <form>
        <h1>Registration Form</h1>
        <div className="form-group">
          <label className="label">Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label className="label">Username</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label className="label"	>Password</label>
          <input
            className="form-control"
            type="text"
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

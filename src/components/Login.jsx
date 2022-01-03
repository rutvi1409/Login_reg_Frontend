import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

const redirecttoregister = () => {
    window.location("/register")
}
  
  return (
    <div className="container">
      <form>
        <h1 className="text-center">Login Form</h1>
         <div className="form-group col-6">
            <label className="label my-2">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group col-6">
            <label className="label my-2">Password</label>
            <input
              className="form-control"
              type="text"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </div>
        <button className="btn btn-primary mt-2">Submit</button>
        <button className="btn btn-warning mt-2 mx-2" onClick={redirecttoregister}>Register</button>
      </form>
    </div>
  );
}

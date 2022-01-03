import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  const [user, setuser] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <div className="container d-flex flex-column">
      <form>
        <h1 className="text-center">Registration Form</h1>
        <div className="d-flex flex-column">
          <div className="form-group col-6">
            <label className="label my-2">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>
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
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
        <button className="btn btn-warning mt-2 mx-2">Login</button>
      </form>
    </div>
  );
}

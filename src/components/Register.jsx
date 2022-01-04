import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Joi from "joi";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email({tlds:false}).required(),
    password: Joi.string().required(),
  });

  const history = useHistory();
  const redirectToLogin = () => {
    history.push("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

 
    const handleSubmit = (event) => {
    event.preventDefault();
    const result = schema.validate(user, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      axios({
        method: "POST",
        url: "http://localhost:4000/api/user/register",
        data: user,
      })
        .then((res) => {
          console.log("res::",res.data);
          // localStorage.setItem("token", token);
          history.push("/dashboard");
        })
        .catch((err) => {
          console.log("error is ", err);
        });
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log(error);
      
      return errorData;
    }
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
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group col-6">
            <label className="label my-2">Username</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={user.email}
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
        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-warning mt-2 mx-2" onClick={redirectToLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

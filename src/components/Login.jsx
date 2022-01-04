import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: false })
      .required(),
    password: Joi.string().required(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = schema.validate(user, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      axios({
        method: "post",
        url: "http://localhost:4000/api/user/login",
        data: user,
      })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          console.log("res::",res.data.token);
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
      // console.log(error);
      return errorData;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  const history = useHistory();
  const redirecttoregister = () => {
    history.push("/register");
  };

  return (
    <div className="container">
      <form>
        <h1 className="text-center">Login Form</h1>
        <div className="form-group col-6 d-flex flex-column">
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
        <div className="form-group col-6 d-flex flex-column">
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
        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          Submit
        </button>
        <button
          className="btn btn-warning mt-2 mx-2"
          onClick={redirecttoregister}
        >
          Register
        </button>
      </form>
    </div>
  );
}

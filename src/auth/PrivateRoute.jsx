import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const islogin = () => {
     return localStorage.getItem("token") ? true : false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        islogin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;

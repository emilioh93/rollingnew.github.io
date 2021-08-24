import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = (props) => {
  const { user } = useContext(UserContext);

  if (user === false) return <Redirect to="/"></Redirect>;

  return <Route {...props}></Route>;
};

export default PrivateRoute;

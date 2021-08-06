import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Components/RegisterPage/Register";
import Login from "../Components/LoginPage/Login";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

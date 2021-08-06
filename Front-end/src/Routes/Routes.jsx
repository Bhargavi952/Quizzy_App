import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Components/RegisterPage/Register";
import Login from "../Components/LoginPage/Login";
import Profile from "../Components/ProfilePage/Profile";

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
        <Route exact path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

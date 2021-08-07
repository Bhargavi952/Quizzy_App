import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Components/RegisterPage/Register";
import Login from "../Components/LoginPage/Login";
import Profile from "../Components/ProfilePage/Profile";

import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";

import Home from "../Components/HomePage/Home";
import Navbar from "../Components/Navbar/Navbar";

const Routes = () => {
  let { isAuth } = useSelector((state) => state.auth);
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default Routes;

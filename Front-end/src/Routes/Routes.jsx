import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Components/RegisterPage/Register";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

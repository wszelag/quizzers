import React from "react";
import { FullScreenWrapper } from "../style/FullScreenWrapper";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <FullScreenWrapper>
        <Router>
          <Switch>
            <Route path="/register" exact>
              <Registration />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </FullScreenWrapper>
    </>
  );
};

export default LandingPage;

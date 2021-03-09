import React from "react";
import { FullScreenWrapper } from "../style/FullScreenWrapper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Pages/Profile";
import Quiz from "./Pages/Quiz";
import Rank from "./Pages/Rank";
import Navigation from "./Nav/Navigation";

const Home = ({ user }) => {
  return (
    <>
      {!user.name && <Redirect to="/" />}
      <FullScreenWrapper>
        <Router>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/quiz" exact>
              <Quiz />
            </Route>
            <Route path="/rank" exact>
              <Rank />
            </Route>
          </Switch>
          <Navigation />
        </Router>
      </FullScreenWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { connect } from "react-redux";
import { toggleTheme } from "./redux/actions";
import getTheme from "./tools/getTheme";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Profile from "./components/Pages/Profile";
import Rank from "./components/Pages/Rank";
import Quiz from "./components/Pages/Quiz";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = ({ theme, user }) => {
  return (
    <>
      <Router>
        {user.name && <Redirect to="/home/quiz" />}
        <ThemeProvider theme={getTheme(theme)}>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Registration />
            </Route>
            <Route path="/home/profile" exact>
              <Profile />
            </Route>
            <Route path="/home/quiz" exact>
              <Quiz />
            </Route>
            <Route path="/home/rank" exact>
              <Rank />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    user: state.user
  };
};

const mapDispatchToProps = {
  toggleTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

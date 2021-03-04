import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { connect } from "react-redux";
import { toggleTheme } from "./redux/actions";
import getTheme from "./tools/getTheme";
import Game from "./components/Game";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
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
        {user.name && <Redirect to="/game" />}
        <ThemeProvider theme={getTheme(theme)}>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Registration />
            </Route>
            <Route path="/game" exact>
              <Game />
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

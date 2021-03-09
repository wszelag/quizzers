import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { connect } from "react-redux";
import { toggleTheme } from "./redux/actions";
import getTheme from "./tools/getTheme";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

const App = ({ theme, user }) => {
  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle />
        {user.name ? <Home /> : <LandingPage />}
      </ThemeProvider>
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

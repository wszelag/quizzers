import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { connect } from "react-redux";
import { toggleTheme } from "./redux/actions";
import getTheme from "./tools/getTheme";

const App = ({ theme, toggleTheme }) => {
  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle />
        some text
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  };
};

const mapDispatchToProps = {
  toggleTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

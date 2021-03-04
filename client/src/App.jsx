import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { light, dark } from "./style/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        some text
      </ThemeProvider>
    </>
  );
};

export default App;

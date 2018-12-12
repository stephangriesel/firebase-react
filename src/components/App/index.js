import React from "react";
import { ThemeProvider } from "styled-components";

import Wrapper from "../Layout/Wrapper";
import Button from "../Layout/Button";
import HeaderText from "../Layout/HeaderText";

const theme = {
  font: "Verdana"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <div>
        <HeaderText>App</HeaderText>
        <Button primary>Primary</Button>
        <Button>Regular</Button>
      </div>
    </Wrapper>
  </ThemeProvider>
);

export default App;

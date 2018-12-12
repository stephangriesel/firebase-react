import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';

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
      <Router>
          <Navigation />
      </Router>
    </Wrapper>
  </ThemeProvider>
);

export default App;

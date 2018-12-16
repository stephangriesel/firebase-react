import React from "react";
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../Signup';
import SignInPage from '../Signin';
import PasswordForgetPage from '../PasswordForgetPage';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

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
        <div>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    </Wrapper>
  </ThemeProvider>
);

export default App;

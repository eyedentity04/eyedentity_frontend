import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login/Login";
import UserRegister from "./components/Login/Register";
import Home from "./components/Home";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {props.login.data ? <Home/> : <Redirect push to="/login" />}
        </Route>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={UserRegister} exact />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login.data,
  };
};

export default connect(mapStateToProps)(App);

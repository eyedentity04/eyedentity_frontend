import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login/Login";
import UserRegister from "./components/Login/Register";
import Home from "./components/Home";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={UserRegister} exact />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(App);

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
        {/* <Route path="/index" component={Index} exact /> */}
        <Route path="/" exact>
          {props.viaLogin ? <Home /> : <Redirect push to="/login" />}
        </Route>
        <Route path="/login">
         
          {props.viaLogin ? <Redirect push to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    viaLogin: state.login.viaLogin,
  };
};

export default connect(mapStateToProps)(App);

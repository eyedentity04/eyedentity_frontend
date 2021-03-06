import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login/Login";
import UserRegister from "./components/Login/Register";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Add from "./components/PageAdd/Addpage";
import PostId from "./components/Homepage/PostId";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/add" exact>
          <Add />
        </Route>
        <Route path="/profile/:_id">
          {props.viaLogin ? <Profile /> : <Redirect push to="/login" />}
        </Route>
        <Route path="/" exact>
          {props.viaLogin ? <Home /> : <Redirect push to="/login" />}
        </Route>
        <Route path="/login" exact>
          {props.viaLogin ? <Redirect push to="/" /> : <Login />}
        </Route>
        <Route path="/register" exact>
          <UserRegister />
        </Route>
        <Route path="/:_id">
          {props.viaLogin ? <PostId /> : <Redirect push to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    viaLogin: state.login.viaLogin,
  };
};

export default connect(mapStateToProps)(App);

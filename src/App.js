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
<<<<<<< HEAD
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={UserRegister} exact />
=======
        {/* <Route path="/index" component={Index} exact /> */}
        <Route path="/" exact>
          {props.viaLogin ? <Home /> : <Redirect push to="/login" />}
        </Route>cd 
        <Route path="/login">
          {" "}
          {props.viaLogin ? <Redirect push to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
>>>>>>> upstream/master
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
<<<<<<< HEAD
    login: state.login,
=======
    viaLogin: state.login.viaLogin,
>>>>>>> upstream/master
  };
};

export default connect(mapStateToProps)(App);

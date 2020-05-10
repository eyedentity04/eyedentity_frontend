import React ,{Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import {Provider} from "react-redux";
import store from "./store/store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/axios";
import {setCurrentUser, logoutUser} from "./actioncreators/auth";

import Login from "./components/Login/Login";
import UserRegister from "./components/Login/Register";
import Home from "./components/Home";


if (localStorage.jwtToken) {
 
  const token = localStorage.jwtToken;
  setAuthToken(token);
 
  const decoded = jwt_decode(token);
 
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
     
      store.dispatch(logoutUser());
      
      window.location.href = "./register";
  }
}
export default class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <Router>
                <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/register" component={UserRegister}/>
                      <Route exact path="/login" component={Login}/>
                      
                </Switch>
              </Router>
          </Provider>
      )
  }
}



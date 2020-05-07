import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";


import Login from "./components/Login/Login";
import UserRegister from "./components/Login/Register"

const store = createStore(reducers,applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register" component={UserRegister} exact />
          <Route path="/" component={Login} exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

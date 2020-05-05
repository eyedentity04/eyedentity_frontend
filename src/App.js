import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Navbar from './components/Navbar'

function App() {
  return (
    
    <Router>
      <Navbar/>
        <Switch>
        <Route path="/register" component={Register} exact/> 
        <Route path="/" component={Login} exact/>
        </Switch>
      
    </Router>
    
  );
}

export default App;

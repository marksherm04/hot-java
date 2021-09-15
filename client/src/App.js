import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Signup from './pages/Signup';


function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Navbar>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup" component={Signup} />
          <Route path="/preferences">
            <Preferences />
          </Route>
          </Navbar >
        </Switch>
      </Router>
    </div>
  );
}

export default App;

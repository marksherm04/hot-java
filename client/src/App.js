import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Router>
        <Switch>
          <Route path="/dashboard">
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          {/* NEED TO EDIT SIGNUP PATH SO IT WORKS */}
          <Route path="/singup" pages={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

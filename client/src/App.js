import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Router>
        <Switch>
          <Route path="/profile">
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          {/* NEED TO EDIT SIGNUP PATH SO IT WORKS */}
          <Route path="/singup" pages={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

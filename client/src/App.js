import React, { useState } from 'react';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Navbar from "./components/Navbar/Navbar";


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="wrapper">
      <h1>Hot Java</h1>
      <Navbar />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar";
=======
import Preferences from './components/Preferences/Preferences';
import Signup from './pages/Signup';
>>>>>>> af9a427647579022d77ce205b4feda423af8b347


function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  
  return (
    <div className="wrapper">
      <h1>Hot Java</h1>
<<<<<<< HEAD
      <Navbar />
=======
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup" component={Signup} />
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
>>>>>>> af9a427647579022d77ce205b4feda423af8b347
    </div>
  );
}

export default App;

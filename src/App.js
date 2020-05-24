import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';

import { Route, Switch } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <div className='App'>
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path='/'>
          <Home loggedIn={loggedIn} />
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

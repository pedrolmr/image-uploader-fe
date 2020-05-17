import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Images from './components/Images';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route
          exact
          path='/register'
          render={(props) => <Register {...props} />}
        />
        <Route exact path='/login' render={(props) => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

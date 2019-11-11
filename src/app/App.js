import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../features/login/login';
import Home from '../features/home/home';
import FirebaseService from '../services/FirebaseService';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={ true } component={ Login }></Route>
        <Route path="/home" component={ Home }></Route>
      </Switch>
    </Router>

  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Feed } from './Routes/index';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

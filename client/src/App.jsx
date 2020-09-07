import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Feed } from './Routes/index';
import NotFound from './error404';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          {/* Error 404 - Not found */}
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

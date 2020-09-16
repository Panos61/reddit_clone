import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import setAuthorizationToken, {
//   getMe,
// } from '../src/store/modules/auth/actions';
// import store from './store';
// import { SET_CURRENT_USER } from './store/modules/auth/types';
import { Login, Register, Feed, Submit, CreateSub } from './Routes/index';
import NotFound from './error404';
import PrivateRoute from './PrivateRoute';
import history from './history';
import { Provider } from 'react-redux';
import store from './store';
import PostLink from './Posts/PostLink';

const App = () => {
  // const dispatch = useDispatch();
  // if (localStorage.token) {
  //   //setAuthorizationToken(localStorage.token);
  //   dispatch(getMe());
  //   store.dispatch({ type: SET_CURRENT_USER });
  // }

  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/post/:id' component={PostLink} />

          {/* Private Routes  */}
          <PrivateRoute exact path='/submit' component={Submit} />
          <Route exact path='/subreddits/create' component={CreateSub} />
          {/* Error 404 - Not found */}
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

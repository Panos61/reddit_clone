import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, Auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem('token');
        if (localStorage.token) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

export default connect(mapStateToProps)(PrivateRoute);

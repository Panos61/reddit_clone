import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { useDispatch } from 'react-redux';
import { SET_CURRENT_USER } from '../store/modules/auth/types';
import setAuthorizationToken, { getMe } from '../store/modules/auth/actions';

import store from '../store';
import Posts from '../Posts/Posts';

const Feed = () => {
  const dispatch = useDispatch();

  if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    dispatch(getMe());
    store.dispatch({ type: SET_CURRENT_USER });
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <Header />
      <h4 style={{ textAlign: 'center' }}>Feed</h4>
      <Posts />
    </>
  );
};

export default Feed;

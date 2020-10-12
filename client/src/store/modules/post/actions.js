import {
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_ERROR,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  LOADING_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  FETCH_SUB_POSTS_SUCCESS,
  FETCH_SUB_POSTS_ERROR,
  //   UPDATE_POST_SUCCESS,
  //   UPDATE_POST_ERROR,
  //   DELETE_POST_SUCCESS,
  //   DELETE_POST_ERROR,

  //   FETCH_AUTH_POSTS,
  //   FETCH_AUTH_POSTS_ERROR,
} from './types';
import { clearErrors, returnErrors } from '../errors/actions';
import history from '../../../history';

// Submit a post
export const submitPost = ({ title, content, subreddit }) => {
  const body = JSON.stringify({ title, content, subreddit });
  return async (dispatch, setAuth) => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          token: localStorage.token,
        },
        body: body,
      });
      const parseRes = await response.json();

      console.log(parseRes);

      if (parseRes.token) {
        localStorage.getItem('token', parseRes.token);
        setAuth(true);
      }

      dispatch({ type: SUBMIT_POST_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
      history.push('/');
    } catch (error) {
      dispatch({ type: SUBMIT_POST_ERROR });
      dispatch(returnErrors(error.message, error.id, 'SUBMIT_POST_ERROR'));
    }
  };
};

// Get all posts
export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_POST });

    try {
      const response = await fetch('http://localhost:4000/api/v1/feed', {
        method: 'GET',
      });

      const parseRes = await response.json();

      dispatch({ type: FETCH_POSTS_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      dispatch({ type: FETCH_POSTS_ERROR });
      dispatch(returnErrors(error.message, error.id, 'FETCH_POSTS_ERROR'));
    }
  };
};

// Get a post
export const getPost = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_POST });

    try {
      const response = await fetch(`http://localhost:4000/api/v1/post/${id}`, {
        method: 'GET',
      });

      const parseRes = await response.json();

      dispatch({ type: GET_POST_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      dispatch({ type: GET_POST_ERROR });
      dispatch(returnErrors(error.message, error.id, 'GET_POST_ERROR'));
    }
  };
};

// Get all posts based on a specific subreddit
export const getSubPosts = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_POST });

    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/subreddit-posts/r/${id}`,
        {
          method: 'GET',
        }
      );

      const parseRes = await response.json();
      dispatch({ type: FETCH_SUB_POSTS_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      dispatch({ type: FETCH_SUB_POSTS_ERROR });
      dispatch(returnErrors(error.message, error.id, 'FETCH_SUB_POSTS_ERROR'));
    }
  };
};

import { clearErrors, returnErrors } from '../errors/actions';
import {
  CREATE_SUBREDDIT_SUCCESS,
  CREATE_SUBREDDIT_ERROR,
  GET_SUBREDDITS_SUCCESS,
  GET_SUBREDDITS_ERROR,
  GET_SUBREDDIT_SUCCESS,
  GET_SUBREDDIT_ERROR,
  JOIN_SUBREDDIT_SUCCESS,
  JOIN_SUBREDDIT_ERROR,
  GET_NEW_SUBREDDITS_SUCCESS,
  GET_NEW_SUBREDDITS_ERROR,
} from './types';
import history from '../../../history';

// Create Subreddit
export const createSub = ({ name, topic, description }) => {
  return async (dispatch, setAuth) => {
    try {
      const body = { name, topic, description };

      const response = await fetch(
        'http://localhost:4000/api/v1/subreddits/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            token: localStorage.token,
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.getItem('token', parseRes.token);
        setAuth(true);
      }

      dispatch({ type: CREATE_SUBREDDIT_SUCCESS, payload: parseRes });
      dispatch(clearErrors());

      history.push('/');
    } catch (error) {
      console.error(error);
      dispatch({ type: CREATE_SUBREDDIT_ERROR });
      dispatch(returnErrors(error.message, error.id, 'CREATE_SUBREDDIT_ERROR'));
    }
  };
};

// Get a list of Subreddits
export const getSubreddits = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/subreddits', {
        method: 'GET',
      });

      const parseRes = await response.json();

      dispatch({ type: GET_SUBREDDITS_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_SUBREDDITS_ERROR });
      dispatch(returnErrors(error.message, error.id, 'GET_SUBREDDITS_ERROR'));
    }
  };
};

// Get a list of new/unfollowed subreddits
export const getNewSubreddits = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:4000/api/v1/subreddits/new',
        {
          method: 'GET',
        }
      );

      const parseRes = await response.json();

      dispatch({ type: GET_NEW_SUBREDDITS_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_NEW_SUBREDDITS_ERROR });
      dispatch(
        returnErrors(error.message, error.id, 'GET_NEW_SUBREDDITS_ERROR')
      );
    }
  };
};

export const getSubredditInfo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:4000/api/v1/subreddits/info',
        {
          method: 'GET',
        }
      );

      const parseRes = await response.json();

      dispatch({ type: GET_SUBREDDIT_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_SUBREDDIT_ERROR });
      dispatch(returnErrors(error.message, error.id, 'GET_SUBREDDIT_ERROR'));
    }
  };
};

export const getSubredditPage = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/subreddits/r/${id}`,
        {
          method: 'GET',
        }
      );

      const parseRes = await response.json();

      dispatch({ type: GET_SUBREDDIT_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_SUBREDDIT_ERROR });
      dispatch(returnErrors(error.message, error.id, 'GET_SUBREDDIT_ERROR'));
    }
  };
};

// Join a subreddit
export const joinSubreddit = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/subreddits/r/${id}/joined`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            token: localStorage.token,
          },
        }
      );

      const parseRes = response.json();

      dispatch({ type: JOIN_SUBREDDIT_SUCCESS, payload: parseRes });
      history.push('/');
      dispatch(clearErrors());
    } catch (error) {
      console.log(error);
      dispatch({ type: JOIN_SUBREDDIT_ERROR });
      dispatch(returnErrors(error.message, error.id, 'JOIN_SUBREDDIT_ERROR'));
    }
  };
};

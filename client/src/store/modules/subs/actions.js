import { clearErrors, returnErrors } from '../errors/actions';
import { CREATE_SUBREDDIT_SUCCESS, CREATE_SUBREDDIT_ERROR } from './types';
import history from '../../../history';

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

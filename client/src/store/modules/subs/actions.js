import { clearErrors, returnErrors } from '../errors/actions';
import { CREATE_SUBREDDIT_SUCCESS, CREATE_SUBREDDIT_ERROR } from './types';
import history from '../../../history';

export const createSub = ({ name, topic, description }) => {
  const body = JSON.stringify({ name, topic, description });

  return async (dispatch, setAuth) => {
    try {
      const response = await fetch(
        'https://localhost:4000/api/v1/subreddits/create',
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: name,
            topic: topic,
            description: description,
          }),
          mode: 'no-cors',
        }
      );

      console.log(body);

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem('token', parseRes.token);
        setAuth(true);
      }

      console.log(parseRes);

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

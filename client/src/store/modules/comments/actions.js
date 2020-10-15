import {
  FETCH_ALL_COMMENTS_ERROR,
  FETCH_ALL_COMMENTS_SUCCESS,
  SUBMIT_COMMENT_SUCCESS,
  // FETCH_ALL_COMMENTS_ERROR,

  // SUBMIT_COMMENT_ERROR,
  // FETCH_ALL_COMMENTS_SUCCESS,
  // LOADING_COMMENTS,
} from './types';
import { clearErrors, returnErrors } from '../errors/actions';

export const submitComment = ({ comment, post_id }) => {
  const body = JSON.stringify({ comment, post_id });
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:4000/api/v1/comments/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            token: localStorage.token,
          },
          body: body,
        }
      );

      const parseRes = await response.json();

      dispatch({
        type: SUBMIT_COMMENT_SUCCESS,
        payload: parseRes,
      });

      dispatch(clearErrors());
    } catch (error) {
      dispatch({ type: SUBMIT_COMMENT_SUCCESS, payload: error.data });
      dispatch(returnErrors(error.message, error.id, 'SUBMIT_COMMENT_ERROR'));
      console.log(error);
    }
  };
};

export const fetchComments = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/comments/${id}`,
        {
          method: 'GET',
        }
      );

      const parseRes = await response.json();

      dispatch({ type: FETCH_ALL_COMMENTS_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
    } catch (error) {
      dispatch({ type: FETCH_ALL_COMMENTS_ERROR });
      dispatch(
        returnErrors(error.message, error.id, 'FETCH_ALL_COMMENTS_ERROR')
      );
    }
  };
};

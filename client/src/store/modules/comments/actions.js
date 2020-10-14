import {
  SUBMIT_COMMENT_SUCCESS,
  // FETCH_ALL_COMMENTS_ERROR,

  // SUBMIT_COMMENT_ERROR,
  // FETCH_ALL_COMMENTS_SUCCESS,
  // LOADING_COMMENTS,
} from './types';
import { clearErrors, returnErrors } from '../errors/actions';

export const submitComment = ({ comment }, post_id) => {
  const body = JSON.stringify({ comment });
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/post/${post_id}`,
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
        payload: { postID: comment.post_id, comment: parseRes },
      });
      dispatch(clearErrors());
    } catch (error) {
      dispatch({ type: SUBMIT_COMMENT_SUCCESS, payload: error.data });
      dispatch(returnErrors(error.message, error.id, 'SUBMIT_COMMENT_ERROR'));
      console.log(error);
    }
  };
};

import {
  FETCH_ALL_COMMENTS_ERROR,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_ERROR,
  FETCH_ALL_COMMENTS_SUCCESS,
  LOADING_COMMENTS,
} from './types';

export const initState = {
  comments: [],
  isLoading: false,
};

const commentsState = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOADING_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };

    case SUBMIT_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [payload, ...state.comments],
      };
    case SUBMIT_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload.comments,
        isLoading: false,
      };

    case FETCH_ALL_COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default commentsState;

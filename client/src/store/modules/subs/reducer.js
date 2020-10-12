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

export const initState = {
  subreddit: {},
  subreddits: [],
  isLoading: false,
};

export const subReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case CREATE_SUBREDDIT_SUCCESS:
      return {
        ...state,
        subreddit: payload.subreddit,
        isLoading: false,
      };

    case CREATE_SUBREDDIT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case GET_SUBREDDITS_SUCCESS:
      return {
        ...state,
        subreddits: payload.subreddits,
        isLoading: false,
      };

    case GET_SUBREDDITS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case GET_SUBREDDIT_SUCCESS:
      return {
        ...state,
        subreddit: payload.subreddit,
        isLoading: false,
      };

    case GET_SUBREDDIT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case JOIN_SUBREDDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subreddits: payload.subreddits,
      };

    case JOIN_SUBREDDIT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case GET_NEW_SUBREDDITS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subreddits: payload.subreddits,
      };

    case GET_NEW_SUBREDDITS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default subReducer;

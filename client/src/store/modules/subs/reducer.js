import { CREATE_SUBREDDIT_SUCCESS, CREATE_SUBREDDIT_ERROR } from './types';

export const initState = {
  subreddit: [],
  isLoading: false,
};

export const subReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case CREATE_SUBREDDIT_SUCCESS:
      return {
        ...state,
        subreddit: payload,
        isLoading: false,
      };

    case CREATE_SUBREDDIT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default subReducer;

import {
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_ERROR,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_AUTH_POSTS,
  FETCH_AUTH_POSTS_ERROR,
  LOADING_POST,
} from './types';

export const initState = {
  posts: [],
  authPosts: [],
  post: {},
  isLoading: false,
};

export const postReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOADING_POST:
      return {
        ...state,
        isLoading: true,
      };

    case SUBMIT_POST_SUCCESS:
      return {
        ...state,
        posts: [payload, ...state.posts],
        authPosts: [payload, ...state.authPosts],
        isLoading: false,
      };
    case SUBMIT_POST_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        isLoading: false,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default postReducer;

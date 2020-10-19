import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  SET_CURRENT_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from './types';
import isEmpty from 'lodash/isEmpty';

export const initState = {
  isAuthenticated: false,
  currentUser: {},
  user: {},
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        user: action.payload,
        isLoading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
        isLoading: false,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
        isLoading: false,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
        isLoading: false,
      };

    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;

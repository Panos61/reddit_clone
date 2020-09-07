import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  // DELETE_USER_SUCCESS,
  // DELETE_USER_ERROR,
  SET_CURRENT_USER,
} from './types';
import isEmpty from 'lodash/isEmpty';

export const initState = {
  isAuthenticated: false,
  currentUser: {},
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        isLoading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
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
    default:
      return state;
  }
};

export default authReducer;

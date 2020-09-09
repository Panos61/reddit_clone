import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  LOGOUT_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  SET_CURRENT_USER,
} from './types';
import axios from 'axios';
import history from '../../../history';
import { clearErrors, returnErrors } from '../errors/actions';

// Login
export const login = ({ email, password }) => {
  const body = JSON.stringify({ email, password });

  return async (dispatch, setAuth) => {
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
      });

      const parseRes = await response.json();
      console.log(body);

      if (parseRes.token) {
        localStorage.setItem('token', parseRes.token);
        setAuth(true);
      }

      dispatch({ type: LOGIN_SUCCESS, payload: parseRes });
      dispatch(clearErrors());

      history.push('/');
    } catch (error) {
      dispatch({ type: LOGIN_ERROR });
      dispatch(returnErrors(error.message, error.id, 'LOGIN_ERROR'));
    }
  };
};

// export const login = ({ email, password }) => {
//   const body = JSON.stringify({ email, password });

//   return async (dispatch, setAuth) => {
//     //dispatch({ type: BEFORE_USER_STATE });
//     try {
//       const res = await axios.post('http://localhost:4000/auth/login', body);
//       let user = res.data;

//       if (user.token) {
//         localStorage.setItem('token', user.token);
//         setAuth(true);
//       }

//       console.warn(user);

//       dispatch({ type: LOGIN_SUCCESS, payload: user });
//       //dispatch({ type: SET_CURRENT_USER, payload: user });
//       dispatch(clearErrors());
//       setTimeout(() => {
//         history.push('/');
//       }, 450);
//     } catch (err) {
//       dispatch(returnErrors(err.message, err.id, 'LOGIN_ERROR'));
//       dispatch({
//         type: LOGIN_ERROR,
//       });
//       console.log(err);
//     }
//   };
// };

// register
export const register = ({ email, username, password }) => {
  const body = JSON.stringify({ email, username, password });

  return async (dispatch, setAuth) => {
    try {
      const res = await axios.post('http://localhost:4000/auth/register', body);
      let user = res.data;

      if (user.token) {
        localStorage.setItem('token', user.token);
        setAuthorizationToken(user.token);
        setAuth(true);
      }

      dispatch({ type: REGISTER_SUCCESS, payload: user });
      dispatch(clearErrors());
    } catch (error) {
      console.error(error);
      dispatch({ type: REGISTER_ERROR });
    }
  };
};

// Get Current user
export const getMe = () => {
  return async (dispatch, setAuth) => {
    try {
      const response = await fetch('http://localhost:4000/auth/get-me', {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const user = await response.json();
      // console.log(parseRes);
      if (user.token) {
        localStorage.setItem('token', user.token);
        setAuth(true);
      }

      dispatch({ type: SET_CURRENT_USER, payload: user });
    } catch (error) {
      console.error(error);
    }
  };
};

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

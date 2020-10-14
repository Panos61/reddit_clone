import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  // DELETE_USER_SUCCESS,
  // DELETE_USER_ERROR,
  SET_CURRENT_USER,
  DELETE_USER_SUCCESS,
} from './types';
import history from '../../../history';
import { clearErrors, returnErrors } from '../errors/actions';
import { toast } from 'react-toastify';
import { DELETE_POST_ERROR } from '../post/types';

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
        dispatch({ type: LOGIN_SUCCESS, payload: parseRes });
        history.push('/');
        toast.success('Logged In Successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch({ type: LOGIN_ERROR });
        toast.error('Wrong Email or Password!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      dispatch(clearErrors());
    } catch (error) {
      dispatch({ type: LOGIN_ERROR });
      dispatch(returnErrors(error.message, error.id, 'LOGIN_ERROR'));
    }
  };
};

// Register
// For some reason, it's not working (401) here but on the register file itself..

// export const register = ({ email, username, password }) => {
//   const body = JSON.stringify({ email, username, password });

//   return async (dispatch, setAuth) => {
//     try {
//       const response = await fetch('http://localhost:4000/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//           Accept: 'application/json',
//           'Access-Control-Allow-Credentials': ' true ',
//         },
//         mode: 'no-cors',
//         body: JSON.stringify(body),
//         credentials: 'include',
//       });

//       const parseRes = response.json();

//       if (parseRes.token) {
//         localStorage.setItem('token', parseRes.token);
//         setAuth(true);
//       }

//       dispatch({ type: REGISTER_SUCCESS, payload: parseRes });
//       dispatch(clearErrors());

//       history.push('/');
//     } catch (error) {
//       console.error(error);
//       dispatch({ type: REGISTER_ERROR });
//       dispatch(returnErrors(error.message, error.id, 'REGISTER_SUCCESS'));
//     }
//   };
// };

// Get Current user
export const getMe = () => {
  return async (dispatch, setAuth) => {
    try {
      const response = await fetch('http://localhost:4000/auth/get-me', {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const user = await response.json();
      if (user.token) {
        localStorage.setItem('token', user.token);
        setAuth(true);
      } else if (!user.token) {
        setAuth(false);
      }

      dispatch({ type: SET_CURRENT_USER, payload: user });
    } catch (error) {
      console.error(error);
    }
  };
};

// Logout User
export const logout = () => (dispatch, setAuth) => {
  setAuth(false);
  localStorage.removeItem('token');
  window.localStorage.clear();
  dispatch({ type: LOGOUT_SUCCESS });
  dispatch(clearErrors());
  history.push('/');
};

// Delete User
export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:4000/auth/users/${id}`, {
        method: 'DELETE',
      });
      const parseRes = response.json();
      dispatch({ type: DELETE_USER_SUCCESS, payload: parseRes });
      dispatch(clearErrors());
      window.localStorage.clear();
      window.location.href = '/';
    } catch (error) {
      dispatch({ type: DELETE_POST_ERROR });
      dispatch(returnErrors());
    }
  };
};

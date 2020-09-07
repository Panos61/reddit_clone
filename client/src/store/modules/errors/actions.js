import { GET_ERRORS, CLEAR_ERRORS } from './types';

// Return Errors
export const returnErrors = (message, id, status = null) => {
  return {
    type: GET_ERRORS,
    payload: { message, id, status },
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

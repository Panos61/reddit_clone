import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorReducer from './errors/reducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
});

export default reducer;

import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorReducer from './errors/reducer';
import postReducer from './post/reducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
  Post: postReducer,
});

export default reducer;

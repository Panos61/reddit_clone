import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorReducer from './errors/reducer';
import postReducer from './post/reducer';
import subReducer from './subs/reducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
  Post: postReducer,
  SubReddit: subReducer,
});

export default reducer;

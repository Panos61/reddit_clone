import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorReducer from './errors/reducer';
import postReducer from './post/reducer';
import subReducer from './subs/reducer';
import commentsState from './comments/reducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
  Post: postReducer,
  SubReddit: subReducer,
  Comments: commentsState,
});

export default reducer;

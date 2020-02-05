import { combineReducers } from 'redux';
import token from './token';
import loading from './loading';
import error from './error';

const reducer = combineReducers({
  token,
  loading,
  error,
});

export default reducer;

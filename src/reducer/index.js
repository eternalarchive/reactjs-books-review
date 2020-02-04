import { combineReducers } from 'redux';
import token from './token';
import loading from './loading';
import errorName from './errorName';

const reducer = combineReducers({
  token,
  loading,
  errorName,
});

export default reducer;

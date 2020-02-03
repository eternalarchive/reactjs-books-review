import { combineReducers } from 'redux';
import token from './token';
import loading from './loading';

const reducer = combineReducers({
  token,
  loading,
});

export default reducer;

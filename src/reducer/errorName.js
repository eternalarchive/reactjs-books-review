import { USER_NOT_EXIST, PASSWORD_NOT_MATCH, LOGIN_ERROR } from '../actions';

const initialState = '';

const errorName = (state = initialState, action) => {
  if (action.type === USER_NOT_EXIST) {
    return `This is not a valid ID.`;
  } else if (action.type === PASSWORD_NOT_MATCH) {
    return `This is not a valid password.`;
  } else if (action.type === LOGIN_ERROR) {
    return `Login Error`;
  }
  return state;
};

export default errorName;

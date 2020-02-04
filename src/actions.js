export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});

export const USER_NOT_EXIST = 'USER_NOT_EXIST';
export const PASSWORD_NOT_MATCH = 'PASSWORD_NOT_MATCH';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const userError = () => ({
  type: USER_NOT_EXIST,
});

export const passwordError = () => ({
  type: PASSWORD_NOT_MATCH,
});

export const loginError = () => ({
  type: PASSWORD_NOT_MATCH,
});

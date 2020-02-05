import BookService from './services/BookService';
import LoginService from './services/LoginService';

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

export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const setError = error => ({
  type: SET_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const loginThunk = (email, password) => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(clearError());
    const response = await LoginService.login({ email, password });
    console.log(response.data);
    const { token } = response.data;
    dispatch(endLoading());
    localStorage.setItem('token', token);
    dispatch(setToken(token));
  } catch (error) {
    console.log(error);
    dispatch(endLoading());
    dispatch(setError(error));
    throw error;
  }
};

export const logoutThunk = token => async dispatch => {
  try {
    await LoginService.logout(token);
  } catch (error) {
    console.log(error);
  }
  localStorage.removeItem('token');
  dispatch(removeToken());
};

export const SET_BOOKS = 'SET_BOOKS';

export const setBooks = books => ({
  type: SET_BOOKS,
  books,
});

export const setBooksThunk = token => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(clearError());
    await sleep(2000);
    const res = await BookService.getBooks(token);
    dispatch(endLoading());
    dispatch(setBooks(res.data));
  } catch (error) {
    dispatch(endLoading());
    dispatch(setError(error));
  }
};

export const deleteBooksThunk = (token, id) => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(clearError());
    await BookService.deleteBook(token, id);
    const res = await BookService.getBooks(token);
    dispatch(endLoading());
    dispatch(setBooks(res.data));
  } catch (error) {
    console.log(error);
    dispatch(endLoading());
    dispatch(setError(error));
  }
};

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

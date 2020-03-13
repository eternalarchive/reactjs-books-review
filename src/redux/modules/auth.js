import LoginService from '../../services/LoginService';
import { push } from 'connected-react-router';
import { put, call, select, takeEvery } from 'redux-saga/effects';
import { createAction, createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'reactjs-books-review/auth',
  namespace: '/',
};

const { success, pending, fail } = createActions(
  {
    SUCCESS: token => ({ token }),
  },
  'PENDING',
  'FAIL',
  options,
);

export const startLoginSaga = createAction('START_LOGIN');
export const startLogoutSaga = createAction('START_LOGOUT');

function* loginSaga({ payload }) {
  try {
    yield put(pending());
    const res = yield call(LoginService.login, payload.email, payload.password);
    const { token } = res.data;
    localStorage.setItem('token', token);
    yield put(success(token));
    yield put(push('/'));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
  }
}

function* logoutSaga() {
  const token = yield select(state => state.auth.token);
  try {
    yield put(pending());
    yield call(LoginService.logout, token);
    localStorage.removeItem('token');
    yield put(success(null));
    yield put(push('/signin'));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
    throw error;
  }
}

export function* userSaga() {
  yield takeEvery('START_LOGIN', loginSaga);
  yield takeEvery('START_LOGOUT', logoutSaga);
}

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const auth = handleActions(
  {
    PENDING: (state, action) => ({ token: null, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      token: action.payload.token,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      token: null,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

export default auth;

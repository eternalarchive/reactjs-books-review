import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'; // react-router-dom packgejson dependency에 있음
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga'; // 1. import
import rootSaga from './modules/saga';

export const history = createBrowserHistory(); // redux에 준비가 됐으므로 실제로 사용해봐야 함
const sagaMiddleware = createSagaMiddleware(); // 2. saga 미들웨어 생성

const create = () => {
  // 로컬스토리지에서 토큰 받아다가 전달해야되니까 초기값을 설정
  const token = localStorage.getItem('token');
  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
      books: {
        books: [],
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware),
    ), // 미들웨어가 가로채서 주소를 바꿔줘야함!
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;

import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'; // react-router-dom packgejson dependency에 있음
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga'; // 1. import
import rootSaga from './modules/saga';
import { List, Map } from 'immutable';

// Map
const object = Map({ name: 'hee', age: '22' });
console.log(object);
const b = object;
b.name = 'jeong';
console.log(object === b); //true

const newObject = object.set('name', 'jeong');
console.log(newObject);
console.log(object === newObject); // false

// List
const list = List([
  Map({ name: 'Mark', age: 38 }),
  Map({ name: 'Anna', age: 26 }),
]);

const first = list.get(0);
const newList = list.setIn([1, 'age'], list.getIn([1, 'age']) + 1);
console.log(list === newList); // false

const newList2 = list.updateIn([1, 'age'], value => value + 1);
console.log(list.toJS(), newList2.toJS());

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

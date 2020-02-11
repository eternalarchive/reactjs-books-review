import { all } from 'redux-saga/effects';
import { booksSaga } from './books';
import { userSaga } from './auth';

export default function* rootSaga() {
  // 내가 이 앱에서 쓸 총체적인 사가
  yield all([
    booksSaga(), // 실행해서 넣어주어야 함
    userSaga(),
  ]); // promise all처럼 배열을 넣어주는 것
}

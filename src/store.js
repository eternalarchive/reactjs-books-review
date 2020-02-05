import { createStore } from 'redux';
import reducer from './reducer';

// 함수를 리턴, 지연 초기화를 위해
export default function create(initialState) {
  return createStore(reducer, initialState);
}

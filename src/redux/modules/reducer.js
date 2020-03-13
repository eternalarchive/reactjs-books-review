import { combineReducers } from 'redux';
import books from './books';
import auth from './auth';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    books,
    auth,
    router: connectRouter(history), // 여기서 히스토리를 만들어 넣어주면 엔트리 포인트가 정확하지 않기 때문에 인자로 생성하여 전달
  });

export default reducer;

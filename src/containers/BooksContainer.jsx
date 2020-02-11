import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from '../components/Books';
import {
  startBooksSaga,
  deleteBookSaga,
  addBookSaga,
} from '../redux/modules/books';

const BooksContainer = props => {
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);
  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(startBooksSaga());
  }, [dispatch]);

  const deleteBook = useCallback(
    bookId => {
      dispatch(deleteBookSaga({ bookId }));
    },
    [dispatch],
  );

  const addBook = useCallback(
    (author, title) => {
      dispatch(addBookSaga({ author, title }));
    },
    [dispatch],
  );

  return (
    <Books
      {...props}
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
      deleteBook={deleteBook}
      addBook={addBook}
    />
  );
};

export default BooksContainer;

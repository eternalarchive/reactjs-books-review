import React, { useCallback } from 'react';
import BookAdd from '../components/BookAdd';
import { useDispatch, useSelector } from 'react-redux';
import { startAddBook } from '../redux/modules/books';

const BookAddContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.books.loading);

  const add = useCallback(book => {
    // dispatch(startAddBook(book));
  }, []);
  return <BookAdd add={add} />;
};

export default BookAddContainer;

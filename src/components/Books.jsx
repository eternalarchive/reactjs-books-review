import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledBookListContainer = styled.ul`
  width: 860px;
`;

const StyledBookList = styled.li`
  background-color: #002d93;
  opacity: 1;
  width: 250px;
  height: 191px;
  padding: 14px;
  display: inline-block;
  &:hover {
    background-color: #60b198;
  }
`;

const StyledBookTitle = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const StyledBookId = styled.p`
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StyledBookAuthor = styled.p`
  color: #fff;
  font-size: 18px;
`;

const Books = ({ token, books, setBooks, deleteBook, error, loading }) => {
  useEffect(() => {
    setBooks(token);
  }, [token, setBooks]);

  const removeTodo = bookId => {
    deleteBook(token, bookId);
  };

  if (error !== null) {
    return <div>에러</div>;
  }

  return (
    <>
      {loading && <p>로딩중...</p>}
      <StyledBookListContainer style={{ paddingLeft: '10px' }}>
        {books.map(book => (
          <StyledBookList
            key={book.bookId}
            style={{ listStyleType: 'none', marginBottom: '10px' }}
          >
            <StyledBookId>{book.bookId}</StyledBookId>
            <StyledBookTitle>{book.title}</StyledBookTitle>
            <StyledBookAuthor>{book.author}</StyledBookAuthor>
            <button onClick={() => removeTodo(book.bookId)}>X</button>
          </StyledBookList>
        ))}
      </StyledBookListContainer>
    </>
  );
};

export default Books;

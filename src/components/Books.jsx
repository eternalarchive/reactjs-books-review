import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';
import styled from 'styled-components';

const StyledBookListContainer = styled.ul`
  width: 860px;
`;

const StyledBookList = styled.li`
  background-color: #002d93;
  position: relative;
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

const StyledPopContainer = styled.div`
  width: 800px;
  padding: 30px;
  margin: 0 auto;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: white;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 0;
  color: #fff;
  font-weight: 700;
`;

const optionWidgetRoot = document.getElementById('addbook-modal-root');

const Books = ({
  books,
  getBooks,
  deleteBook,
  addBook,
  error,
  loading,
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const removeTodo = bookId => {
    deleteBook(bookId);
  };

  const bookAuthorRef = React.createRef();
  const bookTitleRef = React.createRef();
  const [addState, setAddState] = useState('');

  const addBookInfo = async () => {
    const author = bookAuthorRef.current.state.value;
    const title = bookTitleRef.current.state.value;
    if (author === undefined || title === undefined) return;
    try {
      addBook(author, title);
      setAddState(`등록이 완료되었습니다. 저자: ${author}, 제목: ${title}`);
      bookAuthorRef.current.state.value = '';
      bookTitleRef.current.state.value = '';
    } catch (error) {
      console.log(error);
      setAddState(`등록에 실패했습니다.`);
    }
  };

  if (error !== null) {
    return <div>에러</div>;
  }

  const renderWidget = () => {
    const closePopup = () => {
      setIsOpen(false);
    };
    return (
      <StyledPopContainer isOpen={isOpen}>
        <h2>책 등록하기</h2>
        <p>입력하신 값이 없을 경우 등록되지 않습니다.</p>
        <label id="author">저자: </label>
        <Input htmlFor="author" type="text" ref={bookAuthorRef} />
        <label id="book-title">제목: </label>
        <Input htmlFor="book-title" type="text" ref={bookTitleRef} />
        <Button onClick={addBookInfo} style={{ marginTop: '10px' }}>
          등록
        </Button>
        <span style={{ marginLeft: '10px' }}>{addState}</span>
        <StyledCloseButton onClick={closePopup}>X</StyledCloseButton>
      </StyledPopContainer>
    );
  };

  return (
    <>
      {loading && <p>로딩중...</p>}
      {ReactDOM.createPortal(renderWidget(), optionWidgetRoot)}
      <StyledBookListContainer style={{ paddingLeft: '10px' }}>
        {books.map(book => (
          <StyledBookList
            key={book.bookId}
            style={{ listStyleType: 'none', marginBottom: '10px' }}
          >
            <StyledBookId>{book.bookId}</StyledBookId>
            <StyledBookTitle>{book.title}</StyledBookTitle>
            <StyledBookAuthor>{book.author}</StyledBookAuthor>
            <StyledCloseButton onClick={() => removeTodo(book.bookId)}>
              X
            </StyledCloseButton>
          </StyledBookList>
        ))}
      </StyledBookListContainer>
    </>
  );
};

export default Books;

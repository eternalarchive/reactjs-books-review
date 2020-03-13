import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';
import styled from 'styled-components';

const StyledBookListContainer = styled.ul``;

const StyledBookList = styled.li`
  background-color: #002d93;
  position: relative;
  opacity: 1;
  padding: 14px;
  width: 250px;
  height: 190px;
  display: inline-block;
  & + & {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
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
  padding: 30px;
  background-color: white;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledPopupTitle = styled.h2`
  font-size: 2.4rem;
  color: #002d93;
`;

const StyledLine = styled.p`
  height: 2px;
  background-color: #eee;
`;

const StyledPopupInputLabel = styled.label`
  color: #002d93;
`;

const StyledPopupInput = styled.input`
  display: block;
  width: 100%;
  line-height: 2.2;
  padding: 10px;
  border: 2px solid #002d93;
`;

const StyledBookRegiButton = styled.button`
  background-color: #002d93;
  color: #fff;
  border: 0;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 0;
  color: ${props => (props.color ? props.color : '#fff')};
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
        <StyledPopupTitle>BOOK REGISTRATION</StyledPopupTitle>
        <p>입력하신 값이 없을 경우 등록되지 않습니다.</p>
        <StyledLine />
        <StyledPopupInputLabel id="book-title">제목</StyledPopupInputLabel>
        <StyledPopupInput
          htmlFor="book-title"
          type="text"
          ref={bookTitleRef}
          placeholder="입력해주세요"
        />
        <StyledPopupInputLabel id="author">저자</StyledPopupInputLabel>
        <StyledPopupInput
          htmlFor="author"
          type="text"
          ref={bookAuthorRef}
          placeholder="입력해주세요"
        />
        <StyledBookRegiButton onClick={addBookInfo}>
          등록하기
        </StyledBookRegiButton>
        <span style={{ marginLeft: '10px' }}>{addState}</span>
        <StyledCloseButton onClick={closePopup} color="#002D93">
          X
        </StyledCloseButton>
      </StyledPopContainer>
    );
  };

  return (
    <>
      {loading && <p>로딩중...</p>}
      {ReactDOM.createPortal(renderWidget(), optionWidgetRoot)}
      <StyledBookListContainer>
        {books.map(book => (
          <StyledBookList key={book.bookId}>
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

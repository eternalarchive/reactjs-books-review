import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledBookListContainer = styled.ul``;

const StyledBookList = styled.li`
  display: inline-block;
  background-color: #002d93;
  position: relative;
  padding: 15px;
  width: 250px;
  height: 190px;
  margin: 10px;
  &:hover {
    background-color: #60b198;
  }
`;

const StyledBookTitle = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  word-break: keep-all;
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background-color: #000;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
`;

const PopupLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledPopContainer = styled.div`
  width: 450px;
  padding: 30px;
  background-color: white;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledPopupTitle = styled.h2`
  font-size: 2.2rem;
  color: #002d93;
`;

const StyledLine = styled.p`
  height: 2px;
  background-color: #eee;
`;

const StyledInputBox = styled.div`
  margin: 20px 0;
`;

const StyledPopupInputLabel = styled.label`
  color: #002d93;
  font-weight: 500;
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
  padding: 10px;
  font-size: 12px;
  margin-top: 20px;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 0;
  color: ${props => (props.color ? props.color : '#fff')};
  font-size: 14px;
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
    const author = bookAuthorRef.current.value;
    const title = bookTitleRef.current.value;
    if (author === '' || title === '') {
      setAddState(`등록에 실패했습니다.`);
      return;
    }
    try {
      addBook(author, title);
      setAddState(`등록이 완료되었습니다. 저자: ${author}, 제목: ${title}`);
      bookAuthorRef.current.value = '';
      bookTitleRef.current.value = '';
    } catch (error) {
      console.log(error);
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
      <>
        <Overlay isOpen={isOpen} onClick={closePopup} />
        <StyledPopContainer isOpen={isOpen}>
          <StyledPopupTitle>
            BOOK
            <br />
            REGISTRATION
          </StyledPopupTitle>
          <p>입력하신 값이 없을 경우 등록되지 않습니다.</p>
          <StyledLine />
          <StyledInputBox>
            <StyledPopupInputLabel id="book-title">제목</StyledPopupInputLabel>
            <StyledPopupInput
              htmlFor="book-title"
              type="text"
              ref={bookTitleRef}
              placeholder="입력해주세요"
            />
          </StyledInputBox>
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
          <span>{addState}</span>
          <StyledCloseButton onClick={closePopup} color="#002D93">
            X
          </StyledCloseButton>
        </StyledPopContainer>
      </>
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

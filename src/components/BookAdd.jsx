import React, { useRef } from 'react';
import {
  StyledDiv,
  InputTitle,
  StyledSpan,
  InputArea,
  StyledInput,
  ButtonArea,
  StyledButton,
} from './BookAdd.style';

import { PageHeader, message as MessageDialog, Icon } from 'antd';

const BookAdd = ({ addBook, back, loading }) => {
  const titleInput = useRef(null);
  const messageInput = useRef(null);
  const authorInput = useRef(null);
  const urlInput = useRef(null);

  const click = async () => {
    const title = titleInput.current.state.value;
    const message = messageInput.current.state.value;
    const author = authorInput.current.state.value;
    const url = urlInput.current.state.value;
    if (
      title === '' ||
      message === '' ||
      author === undefined ||
      url === undefined
    ) {
      MessageDialog.error('내용을 입력하세요.');
      return;
    }

    addBook({
      title,
      message,
      author,
      url,
    });
  };

  return (
    <>
      <PageHeader
        onBack={back}
        title={
          <div>
            <Icon type="form" /> Add Book
          </div>
        }
        subTitle="Add Your Faborite Book"
      />
      <StyledDiv>
        <InputTitle>
          Title
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Title" ref={titleInput} />
        </InputArea>
        <InputTitle top={10}>
          Comment
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Comment" ref={messageInput} />
        </InputArea>
        <InputTitle top={10}>Author</InputTitle>
        <InputArea>
          <StyledInput placeholder="Author" ref={authorInput} />
        </InputArea>
        <InputTitle top={10}>URL</InputTitle>
        <InputArea>
          <StyledInput placeholder="URL" ref={urlInput} />
        </InputArea>
        <ButtonArea>
          <StyledButton size="large" loading={loading} onClick={click}>
            추가하기
          </StyledButton>
        </ButtonArea>
      </StyledDiv>
    </>
  );
};

export default BookAdd;

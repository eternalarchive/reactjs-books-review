import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import withAuth from '../hocs/withAuth';

const Bookadd = ({ token }) => {
  const bookAuthorRef = React.createRef();
  const bookTitleRef = React.createRef();
  const [addState, setAddState] = useState('');

  const addBookInfo = async () => {
    const author = bookAuthorRef.current.state.value;
    const title = bookTitleRef.current.state.value;
    if (author === undefined || title === undefined) return;
    try {
      await axios.post(
        'https://api.marktube.tv/v1/book',
        {
          title,
          author,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      setAddState(`등록이 완료되었습니다. 저자: ${author}, 제목: ${title}`);
    } catch (error) {
      console.log(error);
      setAddState(`등록에 실패했습니다.`);
    }
  };

  const StyledContainer = styled.div`
    width: 800px;
    padding: 30px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid #999;
    border-radius: 5px;
  `;

  return (
    <StyledContainer>
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
      <p>
        <Link to="/">Book List 확인하기(Home)</Link>
      </p>
    </StyledContainer>
  );
};

export default withAuth(Bookadd);

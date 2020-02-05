import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import withAuth from '../hocs/withAuth';
import { useDispatch } from 'react-redux';
import { removeToken } from '../actions';

const StyledHomeContainer = styled.div`
  width: 1024;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  color: #002d93;
  font-size: 36px;
  font-weight: 700;
  width: 294px;
  line-height: 1.15;
`;

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

const Home = ({ token }) => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      });
  }, [token]);

  const signOut = async () => {
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('token');
    dispatch(removeToken());
  };

  return (
    <StyledHomeContainer>
      <Button onClick={signOut}>로그아웃</Button>
      <ul>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
        <li>
          <Link to="/Bookadd">책 추가하기</Link>
        </li>
      </ul>
      <StyledTitle>Review Service For Books</StyledTitle>
      <section>
        <h3>Book List</h3>
        <StyledBookListContainer style={{ paddingLeft: '10px' }}>
          {books.map(book => (
            <StyledBookList
              key={book.bookId}
              style={{ listStyleType: 'none', marginBottom: '10px' }}
            >
              <StyledBookId>{book.bookId}</StyledBookId>
              <StyledBookTitle>{book.title}</StyledBookTitle>
              <StyledBookAuthor>{book.author}</StyledBookAuthor>
            </StyledBookList>
          ))}
        </StyledBookListContainer>
      </section>
    </StyledHomeContainer>
  );
};

export default withAuth(Home);

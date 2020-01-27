import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import withAuth from '../hocs/withAuth';

const Home = ({ token }) => {
  const [books, setBooks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setBooks(res.data);
      });
  }, [token]);

  const signOut = () => {
    localStorage.removeItem('token');
    history.push('/signin');
  };

  return (
    <div>
      <Button onClick={signOut}>로그아웃</Button>
      <ul>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
        <li>
          <Link to="/Bookadd">책 추가하기</Link>
        </li>
      </ul>
      <h2>여기는 Home 입니다.</h2>
      <section>
        <h3>Book List</h3>
        <ul style={{ paddingLeft: '10px' }}>
          {books.map(book => (
            <li
              key={book.bookId}
              style={{ listStyleType: 'none', marginBottom: '10px' }}
            >
              책 번호: {book.bookId}
              <br />
              저자: {book.author}
              <br />
              제목: {book.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default withAuth(Home);

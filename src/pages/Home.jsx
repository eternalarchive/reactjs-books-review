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
        console.log(res.data);
      });
  }, [token]);

  const signOut = () => {
    // axios
    //   .delete('https://api.marktube.tv/v1/me', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    localStorage.removeItem('token');
    history.push('/signin');
  };

  return (
    <div>
      <Button onClick={signOut}>로그아웃</Button>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
        <li>
          <Link to="/Bookadd">책 추가하기</Link>
        </li>
      </ul>
      <h2>Home</h2>
      <ul>
        {books.map(book => (
          <li key={book.bookId}>
            {book.author} {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Home);

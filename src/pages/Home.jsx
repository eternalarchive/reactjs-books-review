import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import withAuth from '../hocs/withAuth';

const Home = ({ token }) => {
  const [books, setBooks] = useState([]);

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

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
      </ul>
      <h2>Home</h2>
    </div>
  );
};

export default withAuth(Home);

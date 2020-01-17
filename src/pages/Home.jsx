import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
      <p>여기는 홈입니다.</p>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import withAuth from '../hocs/withAuth';

const Bookadd = ({ token }) => {
  const bookAuthorRef = React.createRef();
  const bookTitleRef = React.createRef();

  const addBookInfo = async () => {
    const author = bookAuthorRef.current.value;
    const title = bookTitleRef.current.value;
    console.log(token, author, title);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>책 등록하기</h2>
      저자: <input type="text" ref={bookAuthorRef} />
      책 이름: <input type="text" ref={bookTitleRef} />
      <button onClick={addBookInfo}>등록</button>
      <p>
        <Link to="/">홈으로 돌아가기</Link>
      </p>
    </div>
  );
};

export default withAuth(Bookadd);

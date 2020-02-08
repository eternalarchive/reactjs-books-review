import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import withAuth from '../hocs/withAuth';
import BooksContainer from '../containers/BooksContainer';
import NaviContainer from '../containers/NaviContainer';

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

const Home = () => {
  return (
    <StyledHomeContainer>
      <NaviContainer />
      <ul>
        <li>
          <Link to="/Bookadd">책 추가하기</Link>
        </li>
      </ul>
      <StyledTitle>Review Service For Books</StyledTitle>
      <section>
        <h3>Book List</h3>
        <BooksContainer />
      </section>
    </StyledHomeContainer>
  );
};

export default withAuth(Home);

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import BooksContainer from '../containers/BooksContainer';
import Layout from '../components/Layout';
import useToken from '../hooks/useToken';

const StyledHomeContainer = styled.div``;

const StyledTitle = styled.h1`
  color: #002d93;
  font-size: 36px;
  font-weight: 700;
  width: 294px;
  line-height: 1.15;
`;

const A11yTitle = styled.h3`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  background-color: transparent;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
`;

const StyledMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledAddButton = styled.button`
  background-color: #eee;
  border: 0px;
  font-size: 2.4rem;
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(!isOpen);
  };

  const token = useToken();
  if (token === null) {
    return <Redirect to="/signin" />;
  }

  return (
    <Layout>
      <StyledHomeContainer>
        <StyledMainHeader>
          <StyledTitle>Review Service For Books</StyledTitle>
          <StyledAddButton onClick={openPopup}>+</StyledAddButton>
        </StyledMainHeader>
        <section>
          <A11yTitle>Book List</A11yTitle>
          <BooksContainer isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
      </StyledHomeContainer>
    </Layout>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import SigninBg from '../components/SigninBg';
import SiginFormContainer from '../containers/SiginFormContainer';
import withAuth from '../hocs/withAuth';

// styled-components
const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  align: 'middle',
}))`
  height: 100vh;
`;

const StyledCol = styled(Col).attrs(() => ({
  span: 24,
}))``;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const StyledSubTitle = styled.p`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const StyledUnderline = styled.div`
  width: 200px;
  height: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

const StyledContents = styled(Row).attrs(() => ({
  type: 'flex',
}))`
  margin-top: 50px;
  background-color: #f3f7f8;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

const Signin = () => (
  <StyledRow>
    <StyledCol>
      <StyledTitle>Review Service For Books</StyledTitle>
      <StyledSubTitle>
        Please Share Your Opinion On Web Development Books.
      </StyledSubTitle>
      <StyledUnderline />
      <StyledContents>
        <SigninBg />
        <SiginFormContainer />
      </StyledContents>
    </StyledCol>
  </StyledRow>
);

export default withAuth(Signin, false);

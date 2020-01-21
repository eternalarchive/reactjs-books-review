import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

import InputButton from './InputButton';
import SigninButton from './SigninButton';
import SubButton from './SubButton';

const StyledCol = styled(Col).attrs(() => ({
  span: 12,
}))`
  vertical-align: top;
  padding: 20px 30px;
`;

const StyledLoginTitle = styled.h2`
  text-align: center;
  padding: 30px 0;
  color: #474747;
  font-size: 1.8em;
  font-weight: 700;
  margin-bottom: 0;
`;

const StyledUnderline = styled.div`
  height: 1px;
  background-color: #c7c7c7;
  width: 100%;
`;

const SigninForm = () => (
  <StyledCol>
    <StyledLoginTitle>LOG IN. START SEARCHING</StyledLoginTitle>
    <InputButton email="email" />
    <InputButton password="password" />
    <SigninButton />
    <StyledUnderline />
    <SubButton signup="signup" />
    <SubButton recovery="recovery" />
  </StyledCol>
);

export default SigninForm;

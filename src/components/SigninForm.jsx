import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SigninButton from './SigninButton';
import SignupButton from './SignupButton';
import RecoveryButton from './RecoveryButton';

const StyledCol = styled(Col).attrs(() => ({
  span: 12,
}))`
  vertical-align: top;
  padding: 30px;
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
    <EmailInput />
    <PasswordInput />
    <SigninButton />
    <StyledUnderline />
    <SignupButton />
    <RecoveryButton />
  </StyledCol>
);

export default SigninForm;

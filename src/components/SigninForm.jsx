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
`;

const Underline = styled.div`
  height: 1px;
  background-color: #aaa;
  width: 100%;
`;

const SigninForm = () => (
  <StyledCol>
    <h2>LOG IN. START SEARCHING</h2>
    <EmailInput />
    <PasswordInput />
    <SigninButton />
    <Underline />
    <SignupButton />
    <RecoveryButton />
  </StyledCol>
);

export default SigninForm;

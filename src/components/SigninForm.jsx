import React from 'react';
import { Col, message } from 'antd';
import styled from 'styled-components';

import InputButton from './InputButton';
import SigninButton from './SigninButton';
import SubButton from './SubButton';
import { useEffect } from 'react';

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

const SigninForm = ({ loading, login, error }) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  async function click() {
    const email = emailRef.current.state.value;
    const password = passwordRef.current.state.value;
    console.log('email:', email, 'password:', password);
    login(email, password);
  }

  useEffect(() => {
    if (error === null) return;
    if (error.response.data.error === 'USER_NOT_EXIST') {
      message.error('유저가 없습니다.');
    } else if (error.response.data.error === 'PASSWORD_NOT_MATCH') {
      message.error('비밀번호가 틀렸습니다.');
    } else {
      message.error('로그인에 문제가 있습니다.');
    }
  }, [error]);

  return (
    <StyledCol>
      <StyledLoginTitle>LOG IN. START SEARCHING</StyledLoginTitle>
      <InputButton type="email" refType={emailRef} />
      <InputButton type="password" refType={passwordRef} />
      <SigninButton loading={loading} click={click} />
      <StyledUnderline />
      <SubButton typeContent="signup" />
      <SubButton typeContent="recovery" />
    </StyledCol>
  );
};

export default SigninForm;

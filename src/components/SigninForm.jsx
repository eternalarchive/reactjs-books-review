import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, message } from 'antd';
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

const SigninForm = ({ loading, login }) => {
  const history = useHistory();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  // const [loading, setLoading] = useState(false);

  async function click() {
    const email = emailRef.current.state.value;
    const password = passwordRef.current.state.value;
    console.log(emailRef, passwordRef);
    console.log(email, password);

    // async, await
    try {
      await login(email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
      // message는 그냥 함수(대문자로 시작하면 컴포넌트)
      if (error.response.data.error === 'USER_NOT_EXIST') {
        message.error(`This is not a valid ID.`);
      } else if (error.response.data.error === 'PASSWORD_NOT_MATCH') {
        message.error(`This is not a valid password.`);
      } else {
        message.error(`Login Error`);
        message.error(error.response.data.error);
      }
    }
  }

  return (
    <StyledCol>
      <StyledLoginTitle>LOG IN. START SEARCHING</StyledLoginTitle>
      <InputButton email="email" emailRef={emailRef} />
      <InputButton password="password" passwordRef={passwordRef} />
      <SigninButton loading={loading} click={click} />
      <StyledUnderline />
      <SubButton signup="signup" />
      <SubButton recovery="recovery" />
    </StyledCol>
  );
};

export default SigninForm;

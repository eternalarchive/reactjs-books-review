import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledBox = styled.div`
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMessage = styled.em`
  font-style: normal;
`;

const SignupButton = () => {
  return (
    <StyledBox>
      <StyledMessage>Need to create an account?</StyledMessage>
      <Button>SIGN UP</Button>
    </StyledBox>
  );
};

export default SignupButton;

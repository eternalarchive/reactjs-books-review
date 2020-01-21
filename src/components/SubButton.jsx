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

const SubButton = ({ signup, recovery }) => {
  const buttonValue = signup ? 'signup' : 'recovery';
  return (
    <StyledBox>
      <StyledMessage>
        {buttonValue === 'signup'
          ? 'Need to create an account?'
          : 'Forgot your password?'}
      </StyledMessage>
      <Button>{buttonValue.toUpperCase()}</Button>
    </StyledBox>
  );
};

export default SubButton;

import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledBox = styled.div`
  margin: 20px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMessage = styled.em`
  font-style: normal;
`;

const RecoveryButton = () => {
  return (
    <StyledBox>
      <StyledMessage>Forgot your password?</StyledMessage>
      <Button>RECOVERY</Button>
    </StyledBox>
  );
};

export default RecoveryButton;

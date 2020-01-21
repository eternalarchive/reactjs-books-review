import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledMargin = styled.div`
  margin: 25px 0px;
`;
const SigninButton = () => {
  return (
    <StyledMargin>
      <Button type="primary" size="large">
        SIGN IN
      </Button>
    </StyledMargin>
  );
};

export default SigninButton;

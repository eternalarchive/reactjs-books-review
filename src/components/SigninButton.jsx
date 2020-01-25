import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledMargin = styled.div`
  margin: 25px 0px;
`;
const SigninButton = ({ loading, click }) => {
  return (
    <StyledMargin>
      <Button type="primary" size="large" loading={loading} onClick={click}>
        SIGN IN
      </Button>
    </StyledMargin>
  );
};

export default SigninButton;

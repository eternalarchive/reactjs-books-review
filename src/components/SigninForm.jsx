import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col).attrs(() => ({
  span: 12,
}))`
  vertical-align: top;
`;

const SigninForm = () => <StyledCol>...</StyledCol>;

export default SigninForm;

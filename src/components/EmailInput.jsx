import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const StyledStar = styled.span`
  color: #c52626;
`;

const StyledLabel = styled.label`
  margin: 0px 10px;
`;

const StyledP = styled.p`
  margin-bottom: 0.5em;
`;

const EmailInput = () => {
  return (
    <div>
      <StyledLabel htmlFor="email">
        <StyledP>
          Email<StyledStar>*</StyledStar>
        </StyledP>
        <Input
          type="email"
          id="email"
          placeholder="이메일을 입력해주세요."
          autoFocus
        />
      </StyledLabel>
    </div>
  );
};

export default EmailInput;

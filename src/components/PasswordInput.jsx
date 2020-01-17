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

const PasswordInput = () => {
  return (
    <div>
      <StyledLabel htmlFor="password">
        <StyledP>
          Password<StyledStar>*</StyledStar>
        </StyledP>
        <Input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </StyledLabel>
    </div>
  );
};

export default PasswordInput;

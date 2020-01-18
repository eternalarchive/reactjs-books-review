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

const InputButton = ({ email, password }) => {
  const inputValue = email ? email : password;
  return (
    <div>
      <StyledLabel htmlFor={inputValue}>
        <StyledP>
          {inputValue}
          <StyledStar>*</StyledStar>
        </StyledP>
        <Input
          type={inputValue}
          id={inputValue}
          placeholder={`${inputValue}을 입력해주세요.`}
          autoFocus={inputValue === 'email' ? true : false}
        />
      </StyledLabel>
    </div>
  );
};

export default InputButton;

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

const InputButton = ({ type, refType }) => {
  return (
    <div>
      <StyledLabel htmlFor={type}>
        <StyledP>
          {type}
          <StyledStar>*</StyledStar>
        </StyledP>
        <Input
          type={type}
          id={type}
          placeholder={`${type}을 입력해주세요.`}
          ref={refType}
          autoFocus={type === 'email' ? true : false}
        />
      </StyledLabel>
    </div>
  );
};

export default InputButton;

import React from 'react';
import { StyledHeader, StyledHome, StyledLink } from './Header.style';

import NaviContainer from '../containers/NaviContainer';

const Header = () => (
  <StyledHeader>
    <StyledHome>
      <StyledLink to="/">MY BOOKS</StyledLink>
    </StyledHome>
    <NaviContainer />
  </StyledHeader>
);

export default Header;

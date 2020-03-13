import React from 'react';
import {
  StyledMenu,
  MenuItem,
  StyledLink,
  StyledMenuSubMenu,
  StyledLogoutButton,
  StyledUser,
} from './Navi.style';

const Navi = ({ logout }) => {
  function clickLogout() {
    logout();
  }
  return (
    <StyledMenu>
      <MenuItem key="1">
        <StyledLink to="/add">Add Book</StyledLink>
      </MenuItem>
      <StyledMenuSubMenu key="2" title={<StyledUser>{'User'}</StyledUser>}>
        <MenuItem key="3">
          <StyledLink to="/profile">My Profile</StyledLink>
        </MenuItem>
        <MenuItem key="4">
          <StyledLogoutButton onClick={clickLogout}>
            SIGN OUT
          </StyledLogoutButton>
        </MenuItem>
      </StyledMenuSubMenu>
    </StyledMenu>
  );
};

export default Navi;

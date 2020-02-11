import React from 'react';

const Navi = ({ token, logout }) => {
  function clickLogout() {
    logout();
  }
  return (
    <div>
      <button onClick={clickLogout}>로그 아웃</button>
    </div>
  );
};

export default Navi;

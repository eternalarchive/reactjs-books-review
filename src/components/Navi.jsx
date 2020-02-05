import React from 'react';

const Navi = ({ token, logoutThunk }) => {
  function logout() {
    logoutThunk(token);
  }
  return (
    <div>
      <button onClick={logout}>로그 아웃</button>
    </div>
  );
};

export default Navi;

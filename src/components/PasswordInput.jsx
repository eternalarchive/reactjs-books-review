import React from 'react';

const PasswordInput = () => {
  return (
    <div>
      <label htmlFor="password">
        <p>
          Password<span>*</span>
        </p>
        <input type="password" id="password" />
      </label>
    </div>
  );
};

export default PasswordInput;

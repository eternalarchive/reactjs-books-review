import React from 'react';

const EmailInput = () => {
  return (
    <div>
      <label htmlFor="email">
        <p>
          Email<span>*</span>
        </p>
        <input type="email" id="email" autoFocus />
      </label>
    </div>
  );
};

export default EmailInput;

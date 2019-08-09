import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div>
      {type}
      {text}
    </div>
  );
};

export default Alert;

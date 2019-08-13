import React from 'react';
import { Message } from 'semantic-ui-react';

const Alert = ({ type, text }) => {
  return (
    <div>
      <Message
        color={type === 'Success' ? 'green' : 'red'}
        header={type}
        content={text}
      />
    </div>
  );
};

export default Alert;

import React from 'react';

interface MessageProps {
  type: 'success' | 'error' | 'info';
  text: string;
}

const Message: React.FC<MessageProps> = ({ type, text }) => {
  const messageStyle = {
    color: type === 'success' ? 'green' : type === 'error' ? 'red' : 'blue',
  };

  return <div style={messageStyle}>{text}</div>;
};

export default Message;
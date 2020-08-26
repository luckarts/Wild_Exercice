import React, { useEffect, useState } from 'react';

const Message = ({ message }) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setHide(true);
    }, 2000);
    setHide(false);
    message = '';
    return () => clearInterval(timer);
  }, [message]);
  return <span className={`text-green-600 text-center w-full ${hide ? 'hidden' : 'block'}`}>{message}</span>;
};

export default Message;

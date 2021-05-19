import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Message.scss';

interface IMessageProps {
  text: string,
}

const Message = ({ text }: IMessageProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 700);
  }, []);

  let arrText: string[] = [];
  if (text !== undefined) {
    arrText = text.split(' ');
  }

  return (
    <CSSTransition
      in={show && text !== undefined}
      timeout={200}
      classNames="message"
      mountOnEnter
      unmountOnExit
    >
      <div className="Message">
        { arrText.map((string, i) => {
          if (i === 0) return <h3 key={i}>{`${string}:`}</h3>;

          return <span key={i}>{string}</span>;
        }) }
      </div>
    </CSSTransition>
  );

  return null;
};

export default Message;

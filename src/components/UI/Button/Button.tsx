import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string,
  buttonStyle: string,
  onClickHandler: () => void,
}

const Button = ({ text, buttonStyle = 'default', onClickHandler }: ButtonProps) => {
  const styles = buttonStyle;
  return (
    <button onClick={onClickHandler} type="button" className={`Button ${styles}`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;

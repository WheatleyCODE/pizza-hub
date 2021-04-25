import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string,
  // eslint-disable-next-line react/require-default-props
  ButtonStyle?: string,
  onClickHandler: () => void,
}

const Button = ({ text, ButtonStyle = 'default', onClickHandler }: ButtonProps) => {
  const styles = ButtonStyle;
  return (
    <button onClick={onClickHandler} type="button" className={`Button ${styles}`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;

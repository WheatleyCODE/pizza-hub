import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string,
  // eslint-disable-next-line react/require-default-props
  ButtonStyle?: string,
}

const Button = ({ text, ButtonStyle = 'default' }: ButtonProps) => {
  const styles = ButtonStyle;
  return (
    <button type="button" className={`Button ${styles}`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;

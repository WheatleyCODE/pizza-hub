import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string,
}

const Button = ({ text }: ButtonProps) => (
  <button type="button" className="Button default">
    <span>{text}</span>
  </button>
);

export default Button;

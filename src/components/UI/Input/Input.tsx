import React from 'react';
import './Input.scss';

interface IDefaultParams {
  type: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

interface IInputProps {
  defaultParams: IDefaultParams,
  icon: string,
  validError: string,
  isError: boolean,
}

const Input = (props: IInputProps) => {
  const {
    defaultParams,
    icon,
    validError,
    isError,
  } = props;

  return (
    <div className="Input">
      { isError && <span className="Input__error">{validError}</span> }
      <input className="input" {...defaultParams} />
      <span className="Input__icon"><i className={icon} /></span>
    </div>
  );
};

export default Input;

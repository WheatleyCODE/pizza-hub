/* eslint-disable react/jsx-props-no-spreading */
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

const Input = ({
  defaultParams,
  icon,
  validError,
  isError,
}: IInputProps) => (
  <div className="Input">
    { isError ? <span className="Input__error">{validError}</span> : null}
    <input className="input" {...defaultParams} />
    <span className="Input__icon"><i className={icon} /></span>
  </div>
);

export default Input;

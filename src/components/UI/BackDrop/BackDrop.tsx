import React from 'react';
import './BackDrop.scss';

interface IBackDropProps {
  onCloseHandler: () => void,
}

const BackDrop = ({ onCloseHandler }: IBackDropProps) => (
  <button onClick={onCloseHandler} type="button" className="BackDrop">
    {}
  </button>
);

export default BackDrop;

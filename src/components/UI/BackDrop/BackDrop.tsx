import React from 'react';
import './BackDrop.scss';

interface BackDropProps {
  onCloseHandler: () => void,
}

const BackDrop = ({ onCloseHandler }:BackDropProps) => (
  <button onClick={onCloseHandler} type="button" className="BackDrop">
    {}
  </button>
);

export default BackDrop;

import React from 'react';
import './BackDrop.scss';

interface IBackDropProps {
  onCloseHandler: () => void;
}

const BackDrop: React.FC<IBackDropProps> = ({ onCloseHandler }) => (
  <div aria-hidden onClick={onCloseHandler} className="BackDrop" />
);

export default BackDrop;

import React from 'react';
import './CityItem.scss';

interface ICityItemProps {
  text: string;
  onClick: () => void;
  target: boolean;
}

const CityItem: React.FC<ICityItemProps> = ({ text, onClick, target }) => {
  const targetClass = target ? 'target' : '';

  return (
    <div className="CityItem">
      <div className={`CityItem__item ${targetClass}`}>
        <span onClick={onClick} aria-hidden="true" className="item__text">
          {text}
        </span>
      </div>
    </div>
  );
};

export default CityItem;

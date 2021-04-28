import React from 'react';
import './CityItem.scss';

interface CityItemProps {
  text: string,
  onClick: () => void,
}

const CityItem = ({ text, onClick }: CityItemProps) => (
  <div className="CityItem">
    <div className="CityItem__item">
      <span onClick={onClick} aria-hidden="true" className="item__text">{text}</span>
    </div>
  </div>
);

export default CityItem;

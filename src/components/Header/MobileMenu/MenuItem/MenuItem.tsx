import React from 'react';
import './MenuItem.scss';

interface IMenuItemProps {
  icon: string;
  textFirst: string;
  textLast: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ icon, textFirst, textLast }) => (
  <div className="MenuItem">
    <div className="MenuItem__icon">
      <i className={icon} aria-hidden="true" />
    </div>
    <div className="MenuItem__text">
      <span className="text__first">{textFirst}</span>
      <span className="text__last">{textLast}</span>
    </div>
  </div>
);

export default MenuItem;

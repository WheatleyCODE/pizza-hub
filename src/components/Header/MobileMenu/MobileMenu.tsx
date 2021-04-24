import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './MenuItem/MenuItem';
import Logo from '../Logo/Logo';
import menuItems from '../../../utils/menuItems';
import './MobileMenu.scss';

interface MobileMenuProps {
  onClickHandler: () => void
}

// eslint-disable-next-line arrow-body-style
const MobileMenu = ({ onClickHandler }: MobileMenuProps) => {
  return (
    <div className="MobileMenu">
      <Logo onClickHandler={onClickHandler} />
      <hr className="firstHR" />
      <MenuItem icon="fa fa-map-marker" textFirst="Нижний Новгород" textLast="Изменить" />
      <hr />
      <nav className="MobileMenu__navigation">
        <ul className="navigation__ul">
          { menuItems.map((item) => (
            <NavLink onClick={onClickHandler} to={item.link}>
              <li className="navigation__item-list" key={item.text}>{item.text}</li>
            </NavLink>
          )) }
        </ul>
      </nav>
      <hr />
      <MenuItem icon="fa fa-mobile" textFirst="8-800-555-35-35" textLast="Звонок бесплатный" />
      <hr />
      <MenuItem icon="fa fa-apple" textFirst="Приложение" textLast="(Его нет)" />
    </div>
  );
};

export default MobileMenu;

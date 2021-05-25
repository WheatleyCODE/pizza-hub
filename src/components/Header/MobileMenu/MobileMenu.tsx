import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTypedSelector } from '@hooks';
import { menuItems } from '@utils';
import Routes from '@t/routes';
import MenuItem from './MenuItem';
import Logo from '../Logo';
import './MobileMenu.scss';

interface IMobileMenuProps {
  onClickHandler: () => void;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({ onClickHandler }) => {
  const { currentCity } = useTypedSelector((state) => state.city);

  return (
    <div className="MobileMenu">
      <Logo onClickHandler={onClickHandler} />
      <hr className="firstHR" />
      <Link onClick={onClickHandler} to={Routes.CITY_ROUTE}>
        <MenuItem icon="fa fa-map-marker" textFirst={currentCity.name} textLast="Изменить" />
      </Link>
      <hr />
      <nav className="MobileMenu__navigation">
        <ul className="navigation__ul">
          {menuItems.map((item) => (
            <NavLink key={item.text} onClick={onClickHandler} to={item.link}>
              <li className="navigation__item-list">{item.text}</li>
            </NavLink>
          ))}
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

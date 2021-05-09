import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuItem from './MenuItem/MenuItem';
import Logo from '../Logo/Logo';
import menuItems from '../../../utils/menuItems';
import useTypedSelector from '../../../hooks/useTypedSelector';
import Routes from '../../../types/routes';
import './MobileMenu.scss';

interface IMobileMenuProps {
  onClickHandler: () => void
}

const MobileMenu = ({ onClickHandler }: IMobileMenuProps) => {
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
          { menuItems.map((item) => (
            <NavLink key={item.text} onClick={onClickHandler} to={item.link}>
              <li className="navigation__item-list">{item.text}</li>
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

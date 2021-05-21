import React from 'react';
import { NavLink } from 'react-router-dom';
import pizzaLogo from '../../../img/pizza.png';
import Routes from '../../../types/routes';
import './Logo.scss';

interface ILogoProps {
  onClickHandler?: () => void
}

const Logo = ({ onClickHandler }: ILogoProps) => (
  <NavLink to={Routes.HOME_ROUTE}>
    <button type="submit" onClick={onClickHandler} className="Logo">
      <div>
        <img src={pizzaLogo} alt="logo" />
      </div>
      <h1 className="Logo__text">PIZZA HUB</h1>
    </button>
  </NavLink>
);

export default Logo;

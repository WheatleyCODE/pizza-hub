import React, { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import './Header.scss';
import Logo from './Logo/Logo';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="Header">
      <div className="logo">
        {/* fix */}
        <Logo onClickHandler={() => {}} />
        <div className="menu__container">
          <button type="submit" onClick={toggleMenu} className="burger-menu">
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>
      </div>
      { showMenu ? <MobileMenu onClickHandler={toggleMenu} /> : null }
    </header>
  );
};

export default Header;

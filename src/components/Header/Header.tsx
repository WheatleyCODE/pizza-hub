import React from 'react';
import './Header.scss';

const Header = () => {
  const as = 10;
  console.log(as);
  return (
    <header className="Header">
      <div className="logo">
        <div className="logo__container">
          <div>
            <i className="fa fa-picture-o" aria-hidden="true" />
          </div>
          <h1 className="logo__text">PIZZA HUB</h1>
        </div>
        <div className="menu__container">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
};

export default Header;

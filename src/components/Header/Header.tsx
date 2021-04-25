import React, { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import './Header.scss';
import Logo from './Logo/Logo';
import Button from '../UI/Button/Button';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSityModal, setShowSityModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleSityModal = () => {
    setShowSityModal((prev) => !prev);
  };

  const toggleLoginModal = () => {
    setShowLoginModal((prev) => !prev);
  };

  return (
    <header className="Header">
      <div className="logo__container">
        {/* fix */}
        <div className="logo">
          <Logo onClickHandler={() => {}} />
          <div className="delivery">
            <div className="delivery__container">
              <span className="delivery__firstText">
                Доставка пицы
                {' '}
                <span aria-hidden="true" role="link" onClick={toggleSityModal} className="sity">Нижний Новгород</span>
              </span>
              <span className="delivery__lastText">За 37 минут</span>
            </div>
          </div>
        </div>
        <div className="phone">
          <div className="phone__container">
            <span className="phone__firstText">8-800-555-35-35</span>
            <span className="phone__lastText">Звонок бесплатный</span>
          </div>
        </div>
        <div className="menu__container">
          <button type="submit" onClick={toggleMenu} className="burger-menu">
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
          <div className="login-button">
            <Button onClickHandler={toggleLoginModal} text="Войти" />
          </div>
        </div>
      </div>
      { showMenu ? <MobileMenu onClickHandler={toggleMenu} /> : null }
      { showSityModal ? (
        <Portal>
          <Modal onCloseModal={toggleSityModal}>
            <h1>showSityChanger</h1>
          </Modal>
        </Portal>
      ) : null }

      { showLoginModal ? (
        <Portal>
          <Modal onCloseModal={toggleLoginModal}>
            <h1>showLoginModal</h1>
          </Modal>
        </Portal>
      ) : null }
    </header>
  );
};

export default Header;

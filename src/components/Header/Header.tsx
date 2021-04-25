import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './Logo/Logo';
import Button from '../UI/Button/Button';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import Input from '../UI/Input/Input';
import { useInput } from '../../hooks/useInput';
import './Header.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSityModal, setShowSityModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const inputLogin = useInput('', 'Email', 'email');
  const inputPassword = useInput('', 'Password', 'password');
  const valid = (!inputLogin.isValid || !inputPassword.isValid);

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

      <CSSTransition
        in={showSityModal}
        timeout={200}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <Modal onCloseModal={toggleSityModal}>
            <h1>showSityChanger</h1>
          </Modal>
        </Portal>
      </CSSTransition>

      <CSSTransition
        in={showLoginModal}
        timeout={200}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <Modal onCloseModal={toggleLoginModal}>
            <div>
              <h1 className="logInText">Вход на сайт</h1>
              <Input
                isError={inputLogin.isError}
                validError={inputLogin.validError}
                icon="fa fa-envelope"
                defaultParams={inputLogin.default}
              />
              <Input
                isError={inputPassword.isError}
                validError={inputPassword.validError}
                icon="fa fa-unlock-alt"
                defaultParams={inputPassword.default}
              />
              <div className="buttonContainer">
                <div className="loginButton">
                  { valid
                    ? <Button onClickHandler={() => {}} text="Войти" />
                    : <Button ButtonStyle="bright" onClickHandler={() => {}} text="Войти" /> }
                </div>
                <div className="registerButton">
                  { valid
                    ? <Button onClickHandler={() => {}} text="Регистрация" />
                    : <Button ButtonStyle="bright" onClickHandler={() => {}} text="Регистрация" /> }
                </div>
              </div>
            </div>
          </Modal>
        </Portal>
      </CSSTransition>
    </header>
  );
};
//  <button type="button" disabled={(!inputLogin.isValid || !inputPassword.isValid)}>ОК</button>

export default Header;

import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './Logo/Logo';
import Button from '../UI/Button/Button';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useAction';
import minutesCorrect from '../../utils/correctMinutes';
import './Header.scss';
import Auth from '../Auth/Auth';
import CityChanger from '../CityChanger/CityChanger';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const {
    // error,
    loading,
    city,
    currentCity,
  } = useTypedSelector((state) => state.city);

  const { fetchCity, setCurrentCity } = useActions();

  useEffect(() => {
    fetchCity();
  }, []);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleCityModal = () => {
    setShowCityModal((prev) => !prev);
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
            { !loading ? (
              <div className="delivery__container">
                <span className="delivery__firstText">
                  Доставка пицы
                  {' '}
                  <span aria-hidden="true" role="link" onClick={toggleCityModal} className="city">{currentCity.name}</span>
                </span>
                <span className="delivery__lastText">{`${currentCity.time} ${minutesCorrect(currentCity.time)}`}</span>
              </div>
            ) : null }
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
            <Button buttonStyle="default" onClickHandler={toggleLoginModal} text="Войти" />
          </div>
        </div>
      </div>
      { showMenu ? <MobileMenu onClickHandler={toggleMenu} /> : null }

      <CSSTransition
        in={showCityModal}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <Modal onCloseModal={toggleCityModal}>
            <CityChanger
              city={city}
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
              toggleCityModal={toggleCityModal}
            />
          </Modal>
        </Portal>
      </CSSTransition>

      <CSSTransition
        in={showLoginModal}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <Modal onCloseModal={toggleLoginModal}>
            <Auth />
          </Modal>
        </Portal>
      </CSSTransition>
    </header>
  );
};

export default Header;

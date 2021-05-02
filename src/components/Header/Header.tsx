import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
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
import Routes from '../../types/routes';

const Header = ({ history }: RouteComponentProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const { token } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const {
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
    history.push(Routes.HOME_ROUTE);
  };

  const toggleLoginModal = () => {
    history.push(Routes.HOME_ROUTE);
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
                  <Link to={Routes.CITY_ROUTE}>
                    <span className="city">{currentCity.name}</span>
                  </Link>
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
            { token
              ? <Button buttonStyle="default" onClickHandler={logout} text="Выйти" />
              : (
                <Link to={Routes.LOGIN_ROUTE}>
                  <Button buttonStyle="default" onClickHandler={toggleLoginModal} text="Войти" />
                </Link>
              ) }
          </div>
        </div>
      </div>
      { showMenu ? <MobileMenu onClickHandler={toggleMenu} /> : null }

      <Route path={Routes.CITY_ROUTE}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
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
        )}
      </Route>

      <Route path={Routes.LOGIN_ROUTE}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="modal"
            mountOnEnter
            unmountOnExit
          >
            <Portal>
              <Modal onCloseModal={toggleLoginModal}>
                <Auth toggleLoginModal={toggleLoginModal} />
              </Modal>
            </Portal>
          </CSSTransition>
        )}
      </Route>
    </header>
  );
};

export default Header;

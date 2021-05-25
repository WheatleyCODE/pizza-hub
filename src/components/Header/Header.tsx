import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@ui/Button';
import DashBoard from '@ui/DashBoard';
import { Portal, Modal } from '@hoc';
import { useDebounce, useTypedSelector, useActions } from '@hooks';
import { minutesCorrect } from '@utils';
import Routes from '@t/routes';
import Auth from '@components/Auth';
import CityChanger from '@components/CityChanger';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import Stars from './Stars';
import './Header.scss';

const Header: React.FC<RouteComponentProps> = ({ history }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCityInfo, setShowCityInfo] = useState(false);
  const { token } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const closeCityInfo = useDebounce(() => setShowCityInfo(false), 300);

  const { loading, city, currentCity } = useTypedSelector((state) => state.city);

  const { fetchCity, setCurrentCity } = useActions();

  useEffect(() => {
    fetchCity();
  }, []);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleModal = () => {
    history.push(Routes.HOME_ROUTE);
  };

  return (
    <header className="Header">
      <div className="logo__container">
        <div className="logo">
          <Logo />
          <div className="delivery">
            {!loading && (
              <div className="delivery__container">
                <span className="delivery__firstText">
                  Доставка пицы{' '}
                  <Link to={Routes.CITY_ROUTE}>
                    <span className="city">{currentCity.name}</span>
                  </Link>
                </span>
                <div
                  onMouseEnter={() => setShowCityInfo(true)}
                  onMouseLeave={() => closeCityInfo()}
                  className="delivery__lastText"
                >
                  <span>{`${currentCity.time} ${minutesCorrect(currentCity.time)}`}</span>
                  <i className="fa fa-circle" aria-hidden="true" />
                  <span>{`${currentCity.star}`}</span>
                  <i className="fa fa-star stars" aria-hidden="true" />
                  <CSSTransition
                    in={showCityInfo}
                    timeout={200}
                    classNames="dashboard"
                    mountOnEnter
                    unmountOnExit
                  >
                    <DashBoard>
                      <div className="block1">
                        <h2>{`${currentCity.time} ${minutesCorrect(currentCity.time)}`}</h2>
                        <h4>Cреднее время доставки</h4>
                        <div>Если не успеем за 60 минут, вы получите подарок</div>
                      </div>
                      <div className="block2">
                        <h2>
                          {`${currentCity.star} `}
                          <Stars num={currentCity.star} />
                        </h2>
                        <h4>394 оценки</h4>
                        <div>Оценить заказ можно в мобильном приложении</div>
                      </div>
                    </DashBoard>
                  </CSSTransition>
                </div>
              </div>
            )}
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
            {token ? (
              <Button buttonStyle="default" onClickHandler={logout} text="Выйти" />
            ) : (
              <Link to={Routes.LOGIN_ROUTE}>
                <Button buttonStyle="default" onClickHandler={toggleModal} text="Войти" />
              </Link>
            )}
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu onClickHandler={toggleMenu} />}

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
              <Modal onCloseModal={toggleModal}>
                <CityChanger
                  city={city}
                  currentCity={currentCity}
                  setCurrentCity={setCurrentCity}
                  toggleCityModal={toggleModal}
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
              <Modal onCloseModal={toggleModal}>
                <Auth toggleLoginModal={toggleModal} />
              </Modal>
            </Portal>
          </CSSTransition>
        )}
      </Route>
    </header>
  );
};

export default Header;

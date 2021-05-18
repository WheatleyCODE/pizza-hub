/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import stickyMenuItems from '../../utils/stickyMenuItems';
import Button from '../UI/Button/Button';
import logoImg from '../../img/pizza.png';
import useDebounce from '../../hooks/useDebounse';
import MiniBasket from './MiniBasket/MiniBasket';
import Routes from '../../types/routes';
import useTypedSelector from '../../hooks/useTypedSelector';
import Message from './Message/Message';
import './StickyMenu.scss';

const StickyMenu = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [isHoverButtonOver, setIsHoverButtonOver] = useState(false);
  const [isHoverButtonEnter, setIsHoverButtonEnter] = useState(false);

  const [isHoverBasketOver, setIsHoverBasketOver] = useState(false);
  const [isHoverBasketEnter, setIsHoverBasketEnter] = useState(false);
  const [styleName, setStyleName] = useState('');
  const { changes, basket } = useTypedSelector((state) => state.basket);

  const closeBasketButton = useDebounce(() => setIsHoverButtonOver(false), 1000);
  const closeBasket = useDebounce(() => setIsHoverBasketOver(false), 1000);

  const ScrollLink = Scroll.Link;

  const scrollHandler = (e: any) => {
    const top = e.target.documentElement.scrollTop;
    if (top > 90) {
      setShowLogo(true);
      setStyleName('shadow');
    } else {
      setShowLogo(false);
      setStyleName('');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    setMessages((prev) => [...prev, changes[changes.length - 1]]);
  }, [changes]);

  const onMouseEnterButton = () => {
    setIsHoverButtonEnter(true);
  };

  const onMouseOverButton = () => {
    setIsHoverButtonOver(true);
  };

  const onMouseLeaveButton = () => {
    closeBasketButton();
    setIsHoverButtonEnter(false);
  };

  const onMouseEnterBasket = () => {
    setIsHoverBasketEnter(true);
  };

  const onMouseOverBasket = () => {
    setIsHoverBasketOver(true);
  };

  const onMouseLeaveBasket = () => {
    closeBasket();
    setIsHoverBasketEnter(false);
  };

  let buttonBasketText = '';
  if (basket.length > 0) {
    const amount = basket.reduce((total, obj) => total + obj.amount, 0);
    buttonBasketText = `| ${amount}`;
  }

  return (
    <div className={`StickyMenu ${styleName}`}>
      <div className="StickyMenu__container">
        <div className="flex">
          <CSSTransition
            in={showLogo}
            timeout={150}
            classNames="logo"
            mountOnEnter
            unmountOnExit
          >
            <div className="StickyMenu__logo"><img src={logoImg} alt="logo" /></div>
          </CSSTransition>
          <ul className={`menu ${showLogo ? 'translate' : 'unTranslate'}`}>
            { stickyMenuItems.map((item) => (
              <ScrollLink key={item.title} activeClass="active" to={item.title} spy smooth offset={-100} duration={400}>
                <li className="menu__list" key={item.title}>{item.title}</li>
              </ScrollLink>
            )) }
          </ul>
        </div>
        <div
          onFocus={() => {}}
          onMouseEnter={onMouseEnterButton}
          onMouseLeave={onMouseLeaveButton}
          onMouseOver={onMouseOverButton}
          aria-hidden="true"
          className="basket"
        >
          <Link to={Routes.BASKET_ROUTE}>
            <Button onClickHandler={() => {}} buttonStyle="bright" text={`Корзина ${buttonBasketText}`} />
          </Link>
        </div>
        <CSSTransition
          in={isHoverButtonOver || isHoverBasketOver || isHoverButtonEnter || isHoverBasketEnter}
          timeout={300}
          classNames="modal"
          mountOnEnter
          unmountOnExit
        >
          <MiniBasket
            onMouseOverBasket={onMouseOverBasket}
            onMouseLeaveBasket={onMouseLeaveBasket}
            onMouseEnterBasket={onMouseEnterBasket}
          />
        </CSSTransition>
        <div className="StickyMenu__container__message-block">
          { messages.map((text, i) => <Message key={i} text={text} />) }
        </div>
      </div>
    </div>
  );
};

export default StickyMenu;

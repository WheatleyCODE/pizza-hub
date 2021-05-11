import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import BasketItem from '../MiniBasket/BasketItem/BasketItem';
import BasketImg from '../../img/basket.png';
import Button from '../UI/Button/Button';
import Portal from '../../hoc/Portal/Portal';
import Modal from '../../hoc/Modal/Modal';
import Auth from '../Auth/Auth';
import useActions from '../../hooks/useAction';
import Routes from '../../types/routes';
import './Basket.scss';

const Basket = () => {
  const { basket, postMessage } = useTypedSelector((state) => state.basket);
  const { token, userId, email } = useTypedSelector((state) => state.auth);
  const { currentCity } = useTypedSelector((state) => state.city);
  const { postOrder } = useActions();
  const [show, setShow] = useState(false);
  const amount = basket.reduce((total, obj) => (total + obj.product.currentPrice * obj.amount), 0);

  const onClickHandler = () => {
    if (token && userId && email) {
      postOrder({
        email,
        userId,
        order: basket,
        amount,
        city: currentCity.name,
      });
    } else {
      setShow((prev) => !prev);
    }
  };

  const toggleLoginModal = () => {
    setShow((prev) => !prev);
  };

  if (postMessage) {
    return (
      <div className="Basket">
        <div className="Basket__container">
          <div className="Basket__container__post-message">
            <h2>{postMessage}</h2>
            <Link to={Routes.HOME_ROUTE}>
              <Button buttonStyle="bright" text="На главную" onClickHandler={() => {}} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Basket">
      <div className="Basket__container">
        <h1>Корзина</h1>
        { basket.map((productData) => (
          <BasketItem
            itemStyle="basketI"
            key={productData.id}
            productData={productData}
          />
        ))}
        { basket.length === 0 ? <img className="Basket__img" src={BasketImg} alt="null" /> : null}
        { basket.length !== 0 ? (
          <>
            <div className="Basket__container__price">
              <div className="price__title">Сумма заказа:</div>
              <div className="price__price">{`${amount} р`}</div>
            </div>
            <div className="Basket__container__button">
              <Button buttonStyle="bright" onClickHandler={onClickHandler} text="Оформить заказ" />
            </div>
          </>
        ) : null }
      </div>
      <CSSTransition
        in={show}
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
    </div>
  );
};

export default Basket;

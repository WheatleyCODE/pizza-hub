import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useTypedSelector from '../../hooks/useTypedSelector';
import BasketItem from '../MiniBasket/BasketItem/BasketItem';
import BasketImg from '../../img/basket.png';
import Button from '../UI/Button/Button';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import Auth from '../Auth/Auth';
import './Basket.scss';

const Basket = () => {
  const { basket } = useTypedSelector((state) => state.basket);
  const { token, userId } = useTypedSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const amount = basket.reduce((total, obj) => (total + obj.product.currentPrice * obj.amount), 0);

  const onClickHandler = () => {
    if (token && userId) {
      console.log('Есть');
    } else {
      setShow((prev) => !prev);
    }
  };

  const toggleLoginModal = () => {
    setShow((prev) => !prev);
  };

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

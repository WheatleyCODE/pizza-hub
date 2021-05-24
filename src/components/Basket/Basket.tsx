import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Button from '@ui/Button';
import Input from '@ui/Input';
import Loader from '@ui/Loader';
import { ProductSliderDesktop, ProductSliderMobile, SliderItem } from '@ui/ProductSlider';
import { Modal, Portal } from '@hoc';
import BasketImg from '@images/basket.png';
import useTypedSelector from '@hooks/useTypedSelector';
import { useActions, useInput, useRequest } from '@hooks';
import Routes from '@t/routes';
import Auth from '@components/Auth';
import BasketItem from '@components/StickyMenu/MiniBasket/BasketItem';
import DeliveryMessage from '@components/StickyMenu/MiniBasket/DeliveryMessage';
import './Basket.scss';

interface IPromo {
  promo: string,
  multiply: number,
}

const Basket = () => {
  const {
    basket,
    postMessage,
    products,
    productsLoading,
  } = useTypedSelector((state) => state.basket);

  const { token, userId, email } = useTypedSelector((state) => state.auth);
  const { usePromo, promoMult } = useTypedSelector((state) => state.basket);
  const { currentCity } = useTypedSelector((state) => state.city);
  const { postOrder, fetchProducts, setPromo } = useActions();

  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);

  const [data, loading] = useRequest('/promo.json');
  const basketData: IPromo[] = data;

  const deliveryPrice = 1000;
  const inputPromo = useInput('', 'PROMO#10', 'promo');

  useEffect(() => {
    setAmount(basket.reduce((total, obj) => (total + obj.currentPrice * obj.amount), 0));
  }, [basket]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const addOrder = () => {
    if (token && userId && email) {
      postOrder({
        email,
        userId,
        order: basket,
        amount: amount * promoMult,
        city: currentCity.name,
      });
    } else {
      setShow((prev) => !prev);
    }
  };

  const toggleLoginModal = () => {
    setShow((prev) => !prev);
  };

  const checkPromo = () => {
    if (!usePromo) {
      const index = basketData.findIndex(({ promo }) => inputPromo.default.value === promo);
      if (index !== -1) {
        setPromo(basketData[index].multiply, true);
      }
    }
  };

  if (postMessage) {
    return (
      <div className="Basket">
        <div className="Basket__container">
          <div className="Basket__container__post-message">
            <h2>{postMessage}</h2>
            <Link to={Routes.HOME_ROUTE}>
              <Button buttonStyle="bright" text="На главную" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const productSliderItem = products.map((obj) => (
    <SliderItem
      key={obj.route}
      title={obj.title}
      url={obj.url}
      price={obj.price}
      route={obj.route}
      defaultProduct={obj}
    />
  ));

  return (
    <div className="Basket">
      <div className="Basket__container">
        <h1>Корзина</h1>
        { basket.map((productData) => (
          <BasketItem
            isDetails
            itemStyle="basketI"
            key={productData.id}
            productData={productData}
          />
        )) }
        { basket.length === 0 && <img className="Basket__img" src={BasketImg} alt="null" /> }

        { deliveryPrice - amount > 0 && basket.length !== 0 && (
          <DeliveryMessage amount={amount} deliveryPrice={deliveryPrice} />
        ) }

        { deliveryPrice - amount < 0 && basket.length !== 0 && (
          <div className="Basket__container__space"><h3>Добавить к заказу?</h3></div>
        ) }

        { basket.length !== 0 && (
          <>
            { !productsLoading ? (
              <>
                <div className="Basket__container__slider desctop">
                  <ProductSliderDesktop width={800} sliderItem={productSliderItem} />
                </div>
                <div className="Basket__container__slider mobile">
                  <ProductSliderMobile sliderItem={productSliderItem} />
                </div>
              </>
            ) : <Loader />}

            { !loading ? (
              <div className="Basket__container__promo-code">
                { usePromo ? <h3>Промокод использован!</h3> : <h3>Промокод</h3> }
                <div className="promo-code__container">
                  <Input
                    isError={inputPromo.isError}
                    validError={inputPromo.validError}
                    icon="fa fa-keyboard-o"
                    defaultParams={inputPromo.default}
                  />
                  <div className="promo-code__container__button">
                    { !inputPromo.isValid
                      ? <Button buttonStyle="default" text="Применить" />
                      : <Button buttonStyle="bright" onClickHandler={checkPromo} text="Применить" /> }
                  </div>
                </div>
              </div>
            ) : <Loader /> }
            <div className="Basket__container__price">
              <div className="price__title">Сумма заказа:</div>
              { usePromo ? (
                <div className="price__price">
                  <span className="price__price__prev">
                    {`${amount} ₽`}
                  </span>
                  <span className="price__price__curent">
                    {`${Math.round(amount * promoMult)} ₽`}
                  </span>
                </div>
              ) : (
                <div className="price__price">
                  <span className="price__price__curent">
                    {`${amount} ₽`}
                  </span>
                </div>
              ) }
            </div>
            <div className="Basket__container__buttons">
              <Link to={Routes.HOME_ROUTE}>
                <Button buttonStyle="default" text="Вернуться в меню" />
              </Link>
              <Button buttonStyle="bright" onClickHandler={addOrder} text="Оформить заказ" />
            </div>
          </>
        ) }
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

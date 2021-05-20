import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import BasketItem from '../StickyMenu/MiniBasket/BasketItem/BasketItem';
import BasketImg from '../../img/basket.png';
import Button from '../UI/Button/Button';
import Portal from '../../hoc/Portal/Portal';
import Modal from '../../hoc/Modal/Modal';
import Auth from '../Auth/Auth';
import useActions from '../../hooks/useAction';
import Routes from '../../types/routes';
import ProductSliderDesktop from '../UI/ProductSlider/ProductSliderDesktop/ProductSliderDesktop';
import DeliveryMessage from '../StickyMenu/MiniBasket/DeliveryMessage/DeliveryMessage';
import Input from '../UI/Input/Input';
import useInput from '../../hooks/useInput';
import useRequest from '../../hooks/useRequest';
import Loader from '../UI/Loader/Loader';
import ProductSliderMobile from '../UI/ProductSlider/ProductSliderMobile/ProductSliderMobile';
import SliderItem from '../UI/ProductSlider/SliderItem/SliderItem';
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
  const { currentCity } = useTypedSelector((state) => state.city);
  const { postOrder, fetchProducts } = useActions();

  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);
  const [promoMult, setPromoMult] = useState(1);
  const [usePromo, setUsePromo] = useState(false);

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

  const checkPromo = async () => {
    if (!usePromo) {
      const index = basketData.findIndex((obj) => inputPromo.default.value === obj.promo);
      if (index !== -1) {
        setPromoMult(basketData[index].multiply);
        setUsePromo(true);
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
              <Button buttonStyle="bright" text="На главную" onClickHandler={() => {}} />
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
        { basket.length === 0 ? <img className="Basket__img" src={BasketImg} alt="null" /> : null }

        { deliveryPrice - amount > 0 && basket.length !== 0 ? (
          <DeliveryMessage amount={amount} deliveryPrice={deliveryPrice} />
        ) : null }

        { deliveryPrice - amount < 0 && basket.length !== 0 ? (
          <div className="Basket__container__space"><h3>Добавить к заказу?</h3></div>
        ) : null}

        { basket.length !== 0 ? (
          <>
            { !productsLoading ? (
              <>
                <div className="Basket__container__slider desctop">
                  <ProductSliderDesktop sliderItem={productSliderItem} />
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
                      ? <Button buttonStyle="default" onClickHandler={() => {}} text="Применить" />
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
                <Button buttonStyle="default" onClickHandler={() => {}} text="Вернуться в меню" />
              </Link>
              <Button buttonStyle="bright" onClickHandler={addOrder} text="Оформить заказ" />
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

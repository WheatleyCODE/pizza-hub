import React from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import BasketItem from './BasketItem/BasketItem';
import BasketImg from '../../../img/basket.png';
import DeliveryMessage from './DeliveryMessage/DeliveryMessage';
import './MiniBasket.scss';

interface IMiniBasketProps {
  onMouseOverBasket: () => void,
  onMouseLeaveBasket: () => void,
  onMouseEnterBasket: () => void,
}

const MiniBasket = (props: IMiniBasketProps) => {
  const { basket } = useTypedSelector((state) => state.basket);
  const deliveryPrice = 1000;
  const {
    onMouseOverBasket,
    onMouseLeaveBasket,
    onMouseEnterBasket,
  } = props;

  const amount = basket.reduce((total, obj) => (total + obj.currentPrice * obj.amount), 0);

  let stylesProducts;
  let stylesMiniBasket;
  if (basket.length !== 0) {
    stylesProducts = {
      paddingRight: '20px',
    };

    stylesMiniBasket = {
      padding: '10px 0px 10px 20px',
    };
  }

  return (
    <div className="animation-container">
      <div
        aria-hidden="true"
        onFocus={() => {}}
        onMouseOver={onMouseOverBasket}
        onMouseLeave={onMouseLeaveBasket}
        onMouseEnter={onMouseEnterBasket}
        className="MiniBasket"
        style={stylesMiniBasket}
      >
        <div style={stylesProducts} className="MiniBasket__products">

          { basket.map((productData) => (
            <BasketItem
              itemStyle={null}
              key={productData.id}
              productData={productData}
            />
          )) }

          { basket.length === 0 ? <img className="MiniBasket__img" src={BasketImg} alt="null" /> : null }

        </div>

        { deliveryPrice - amount > 0 && basket.length !== 0 ? (
          <DeliveryMessage deliveryPrice={deliveryPrice} amount={amount} />
        ) : null }

        { basket.length !== 0 ? (
          <div className="MiniBasket__price">
            <div className="price__title">Сумма заказа:</div>
            <div className="price__price">{`${amount} ₽`}</div>
          </div>
        ) : null }

      </div>
      <div className="triangle" />
    </div>
  );
};

export default MiniBasket;

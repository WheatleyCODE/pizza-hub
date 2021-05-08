import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import BasketItem from './BasketItem/BasketItem';
import BasketImg from '../../img/basket.png';
import './MiniBasket.scss';

interface IMiniBasketProps {
  onMouseOverBasket: () => void,
  onMouseLeaveBasket: () => void,
  onMouseEnterBasket: () => void,
}

const MiniBasket = (props: IMiniBasketProps) => {
  const { basket } = useTypedSelector((state) => state.basket);
  const {
    onMouseOverBasket,
    onMouseLeaveBasket,
    onMouseEnterBasket,
  } = props;

  const amount = basket.reduce((total, obj) => (total + obj.product.currentPrice * obj.amount), 0);

  return (
    <div className="animation-container">
      <div
        aria-hidden="true"
        onFocus={() => {}}
        onMouseOver={onMouseOverBasket}
        onMouseLeave={onMouseLeaveBasket}
        onMouseEnter={onMouseEnterBasket}
        className="MiniBasket"
      >
        { basket.map((productData) => (
          <BasketItem
            itemStyle={null}
            key={productData.id}
            productData={productData}
          />
        ))}
        { basket.length === 0 ? <img className="MiniBasket__img" src={BasketImg} alt="null" /> : null}
        { basket.length !== 0 ? (
          <div className="MiniBasket__price">
            <div className="price__title">Сумма заказа:</div>
            <div className="price__price">{`${amount} р`}</div>
          </div>
        ) : null }
      </div>
      <div className="triangle" />
    </div>
  );
};

export default MiniBasket;

import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import BasketItem from '../MiniBasket/BasketItem/BasketItem';
import BasketImg from '../../img/basket.png';
import './Basket.scss';

const Basket = () => {
  const { basket } = useTypedSelector((state) => state.basket);
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
      </div>
    </div>
  );
};

export default Basket;

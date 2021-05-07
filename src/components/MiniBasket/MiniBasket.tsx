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

  return (
    <>
      <div className="triangle" />
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
            key={productData.product.pizzaInfo.title}
            productData={productData}
          />
        ))}
        { basket.length === 0 ? <img className="MiniBasket__img" src={BasketImg} alt="null" /> : null}
      </div>
    </>
  );
};

export default MiniBasket;

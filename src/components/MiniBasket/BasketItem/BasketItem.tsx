import React from 'react';
import { IBasketItem } from '../../../types/basket';
import { replaceDoughText, replacePizzaSizeText } from '../../../utils/replacement';
import './BasketItem.scss';

interface IBasketItemProps {
  productData: IBasketItem,
  itemStyle: string | null,
}

const BasketItem = ({ productData, itemStyle }: IBasketItemProps) => {
  const { dough, pizzaSize, currentPrice } = productData.product;
  const { title, url, size } = productData.product.pizzaInfo;
  const { amount } = productData;
  console.log(itemStyle);

  const doughText = replaceDoughText(dough);
  const sizeText = replacePizzaSizeText(pizzaSize);

  return (
    <div className={`BasketItem ${itemStyle}`}>
      <div className="BasketItem__delete-button">
        <button type="button">
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
      </div>
      <div className="BasketItem__img">
        <img src={url} alt={title} />
      </div>
      <div className="BasketItem__title">
        <span className="title">{title}</span>
        <span className="description">{`${sizeText} ${size} см, ${doughText}`}</span>
      </div>
      <div className="BasketItem__amount">
        <div className="counter">
          <button className="counter__button" type="button">
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
          <span className="counter__number">{amount}</span>
          <button className="counter__button" type="button">
            <i className="fa fa-minus" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="BasketItem__price">
        <span className="price">{`${currentPrice} р`}</span>
      </div>
    </div>
  );
};

export default BasketItem;

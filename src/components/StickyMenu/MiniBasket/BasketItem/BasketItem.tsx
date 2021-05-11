import React from 'react';
import { IBasketItem } from '../../../../types/basket';
import useActions from '../../../../hooks/useAction';
import { replaceDoughText, replacePizzaSizeText } from '../../../../utils/replacement';
import './BasketItem.scss';

interface IBasketItemProps {
  productData: IBasketItem,
  itemStyle: string | null,
}

const BasketItem = ({ productData, itemStyle }: IBasketItemProps) => {
  const { changeAmount, deleteFromBasket } = useActions();
  const { dough, pizzaSize, currentPrice } = productData.product;
  const { title, url, size } = productData.product.pizzaInfo;
  const { amount, id } = productData;

  const chgAmount = {
    add: 1,
    sub: -1,
  };

  const price = amount * currentPrice;

  const doughText = replaceDoughText(dough);
  const sizeText = replacePizzaSizeText(pizzaSize);

  return (
    <div className={`BasketItem ${itemStyle}`}>
      <div className="BasketItem__delete-button">
        <button onClick={() => deleteFromBasket(id)} type="button">
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
          <button onClick={() => changeAmount(chgAmount.add, id)} className="counter__button" type="button">
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
          <span className="counter__number">{amount}</span>
          <button onClick={() => changeAmount(chgAmount.sub, id)} className="counter__button" type="button">
            <i className="fa fa-minus" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="BasketItem__price">
        <span className="price">{`${price} р`}</span>
      </div>
    </div>
  );
};

export default BasketItem;

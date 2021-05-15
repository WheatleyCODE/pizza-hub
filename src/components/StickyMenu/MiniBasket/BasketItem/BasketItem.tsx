import React from 'react';
import { IBasketItem } from '../../../../types/basket';
import useActions from '../../../../hooks/useAction';
import { replaceDoughText, replacePizzaSizeText } from '../../../../utils/replacement';
import Counter from '../../../UI/Counter/Counter';
import './BasketItem.scss';

interface IBasketItemProps {
  productData: IBasketItem,
  itemStyle: string | null,
}

const BasketItem = ({ productData, itemStyle }: IBasketItemProps) => {
  const { deleteFromBasket } = useActions();

  const {
    amount,
    id,
    url,
    title,
    currentPrice,
  } = productData;

  const { size, dough, pizzaSize } = productData.moreInfo;

  const price = amount * currentPrice;

  let description = '';

  if (dough !== null && pizzaSize !== null && size !== null) {
    const sizeText = replacePizzaSizeText(pizzaSize);
    const doughText = replaceDoughText(dough);
    description = `${sizeText} ${size} см, ${doughText}`;
  }

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
        <span className="description">{description}</span>
      </div>
      <div className="BasketItem__amount">
        <Counter id={id} amount={amount} />
      </div>
      <div className="BasketItem__price">
        <span className="price">{`${price} ₽`}</span>
      </div>
    </div>
  );
};

export default BasketItem;

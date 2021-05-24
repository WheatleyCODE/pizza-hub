import React from 'react';
import Counter from '@ui/Counter';
import { useActions } from '@hooks';
import { replaceDoughText, replacePizzaSizeText, firstLetterUp } from '@utils';
import { IBasketItem } from '@t/basket';
import './BasketItem.scss';

interface IBasketItemProps {
  productData: IBasketItem,
  itemStyle: string | null,
  isDetails: boolean,
}

const BasketItem = ({ productData, itemStyle, isDetails }: IBasketItemProps) => {
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

  if (productData.moreInfo.combo !== null && isDetails) {
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
          <span className="BasketItem__title__title">{title}</span>
          <span className="BasketItem__title__description">{description}</span>
          <span className="BasketItem__title__details">
            { productData.moreInfo.combo.map((el) => (
              <span key={el.item.title} className="BasketItem__title__details__combo-item">
                {`• ${el.item.title}`}
              </span>
            )) }
          </span>
        </div>
        <div className="BasketItem__amount">
          <Counter id={id} amount={amount} />
        </div>
        <div className="BasketItem__price">
          <span className="price">{`${price} ₽`}</span>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line max-len
  if (productData.moreInfo.moreIngredients !== null && isDetails && productData.moreInfo.defaultIngredients !== null) {
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
          <span className="BasketItem__title__title">{title}</span>
          <span className="BasketItem__title__description">{description}</span>
          <span className="BasketItem__title__details">
            { productData.moreInfo.moreIngredients.map((el) => {
              if (el.add) return <span key={el.title} className="BasketItem__title__details__add-item">{`+ ${el.title},`}</span>;
              return null;
            }) }
          </span>
          <span className="BasketItem__title__details">
            { productData.moreInfo.defaultIngredients.map((el) => {
              if (!el.add) return <span key={el.title} className="BasketItem__title__details__dell-item">{`- ${firstLetterUp(el.title)},`}</span>;
              return null;
            }) }
          </span>
        </div>
        <div className="BasketItem__amount">
          <Counter id={id} amount={amount} />
        </div>
        <div className="BasketItem__price">
          <span className="price">{`${price} ₽`}</span>
        </div>
      </div>
    );
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
        <span className="BasketItem__title__title">{title}</span>
        <span className="BasketItem__title__description">{description}</span>
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

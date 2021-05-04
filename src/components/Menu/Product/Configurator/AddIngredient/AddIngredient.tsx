import React, { useState } from 'react';
import { IIngredients, IMoreIng } from '../../../../../types/menu';
import './AddIngredient.scss';

interface IAddIngredientProps {
  ing : IIngredients,
  addPrice: (currentPrice: number) => void;
  pizzaSize: any;
  changeMoreIng: (ing: IMoreIng) => void,
  disableElem: string,
}

const AddIngredient = ({
  ing,
  addPrice,
  pizzaSize,
  changeMoreIng,
  disableElem,
}: IAddIngredientProps) => {
  const [isTarget, setIsTarget] = useState(false);

  let currentIngPrice: number;
  switch (pizzaSize) {
    case 'large': currentIngPrice = ing.price + 20;
      break;
    case 'medium': currentIngPrice = ing.price;
      break;
    default: currentIngPrice = ing.price - 10;
      break;
  }

  const onClickHandler = () => {
    changeMoreIng({ ...ing, add: !isTarget });
    setIsTarget((prev) => !prev);

    if (isTarget) {
      addPrice(-currentIngPrice);
    } else {
      addPrice(currentIngPrice);
    }
  };

  if (disableElem === ing.title) {
    return (
      <button type="button" className="moreIngredients disable">
        <img src={ing.url} alt="ing" />
        <h5 className="moreIngredients__title">{ing.title}</h5>
        <span className="moreIngredients__price">{`${currentIngPrice}р`}</span>
      </button>
    );
  }

  return (
    <button type="button" onClick={onClickHandler} className={`moreIngredients ${isTarget ? 'target' : ''}`}>
      {isTarget ? (
        <div className="moreIngredients__check-icon">
          <i className="fa fa-check-circle-o" aria-hidden="true" />
        </div>
      ) : null}
      <img src={ing.url} alt="ing" />
      <h5 className="moreIngredients__title">{ing.title}</h5>
      <span className="moreIngredients__price">{`${currentIngPrice}р`}</span>
    </button>
  );
};

export default AddIngredient;

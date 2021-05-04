import React, { useState } from 'react';
import { IIngredients } from '../../../../../types/menu';
import './AddIngredient.scss';

interface IAddIngredientProps {
  ing : IIngredients,
  addPrice: (currentPrice: number) => void;
  pizzaSize: any;
}

const AddIngredient = ({ ing, addPrice, pizzaSize }: IAddIngredientProps) => {
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
    setIsTarget((prev) => !prev);

    if (isTarget) {
      addPrice(-currentIngPrice);
    } else {
      addPrice(currentIngPrice);
    }
  };

  return (
    <div aria-hidden="true" onClick={onClickHandler} className={`moreIngredients ${isTarget ? 'target' : ''}`}>
      <img src={ing.url} alt="ing" />
      <h5 className="moreIngredients__title">{ing.title}</h5>
      <span className="moreIngredients__price">{`${currentIngPrice}р`}</span>
    </div>
  );
};

export default AddIngredient;

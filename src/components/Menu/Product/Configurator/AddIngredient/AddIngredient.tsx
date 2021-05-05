import React from 'react';
import { IMoreIng } from '../../../../../types/menu';
import './AddIngredient.scss';

interface IAddIngredientProps {
  ing : IMoreIng,
  changeCurrentPrice: () => void;
  murkUp: number;
  changeMoreIng: (ing: IMoreIng) => void,
  disableElem: string,
}

const AddIngredient = (props: IAddIngredientProps) => {
  const {
    ing,
    changeCurrentPrice,
    murkUp,
    changeMoreIng,
    disableElem,
  } = props;

  const onClickHandler = () => {
    changeMoreIng({ ...ing, add: !ing.add });
    changeCurrentPrice();
  };

  if (disableElem === ing.title) {
    return (
      <button type="button" className="moreIngredients disable">
        <img src={ing.url} alt="ing" />
        <h5 className="moreIngredients__title">{ing.title}</h5>
        <span className="moreIngredients__price">{`${ing.price + murkUp}р`}</span>
      </button>
    );
  }

  return (
    <button type="button" onClick={onClickHandler} className={`moreIngredients ${ing.add ? 'target' : ''}`}>
      {ing.add ? (
        <div className="moreIngredients__check-icon">
          <i className="fa fa-check-circle-o" aria-hidden="true" />
        </div>
      ) : null}
      <img src={ing.url} alt="ing" />
      <h5 className="moreIngredients__title">{ing.title}</h5>
      <span className="moreIngredients__price">{`${ing.price + murkUp}р`}</span>
    </button>
  );
};

export default AddIngredient;

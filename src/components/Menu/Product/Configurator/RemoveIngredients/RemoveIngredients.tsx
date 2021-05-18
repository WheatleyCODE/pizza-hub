import React from 'react';
import { IDefaultIng } from '../../../../../types/menu';
import './RemoveIngredients.scss';

interface IRemoveIngredients {
  ing: {
    title: string,
    add: boolean,
  },
  changeDefaultIng: (ing: IDefaultIng) => void,
}
const RemoveIngredients = ({ ing, changeDefaultIng }: IRemoveIngredients) => {
  const onClickHandler = () => {
    changeDefaultIng({ title: ing.title, add: !ing.add });
  };

  return (
    <button
      onClick={onClickHandler}
      type="button"
      className={`RemoveIngredients ${!ing.add ? 'target' : ''}`}
    >
      <span>
        {ing.title}
        { !ing.add ? <i className="fa fa-undo" aria-hidden="true" /> : <i className="fa fa-minus-square-o" aria-hidden="true" /> }
        ,
      </span>
    </button>
  );
};

export default RemoveIngredients;

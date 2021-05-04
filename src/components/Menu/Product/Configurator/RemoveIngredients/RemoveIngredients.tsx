import React, { useState } from 'react';
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
  const [isTarget, setIsTarget] = useState(false);

  const onClickHandler = () => {
    changeDefaultIng({ title: ing.title, add: isTarget });
    setIsTarget((prev) => !prev);
  };

  return (
    <button
      onClick={onClickHandler}
      type="button"
      className={`RemoveIngredients ${isTarget ? 'target' : ''}`}
    >
      <span>
        {ing.title}
        {isTarget ? <i className="fa fa-undo" aria-hidden="true" /> : <i className="fa fa-minus-square-o" aria-hidden="true" />}
        ,
      </span>
    </button>
  );
};

export default RemoveIngredients;

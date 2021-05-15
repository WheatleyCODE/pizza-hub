import React from 'react';
import useActions from '../../../hooks/useAction';
import './Counter.scss';

interface ICounterProps {
  id: number,
  amount: number,
}
const Counter = ({ id, amount }: ICounterProps) => {
  const { changeAmount } = useActions();

  const chgAmount = {
    add: 1,
    sub: -1,
  };

  return (
    <div className="Counter">
      <button onClick={() => changeAmount(chgAmount.add, id)} className="Counter__button" type="button">
        <i className="fa fa-plus" aria-hidden="true" />
      </button>
      <span className="Counter__number">{amount}</span>
      <button onClick={() => changeAmount(chgAmount.sub, id)} className="Counter__button" type="button">
        <i className="fa fa-minus" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Counter;

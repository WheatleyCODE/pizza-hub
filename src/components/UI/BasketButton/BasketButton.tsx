import React from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../../hooks/useTypedSelector';
import Routes from '../../../types/routes';
import './BasketButton.scss';

const BasketButton = () => {
  const { basket } = useTypedSelector((state) => state.basket);
  const amount = basket.reduce((total, obj) => total + obj.amount, 0);

  return (
    <div className="BasketButton">
      <Link to={Routes.BASKET_ROUTE}>
        { basket.length > 0 && <div className="BasketButton__length">{amount}</div> }
        <i className="fa fa-shopping-basket" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default BasketButton;

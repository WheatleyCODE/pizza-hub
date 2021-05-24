import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '@t/routes';
import './ModalBuyButton.scss';

interface IModalBuyButtonProps {
  to: Routes,
  price: number,
  callback: () => void,
}

const ModalBuyButton = ({ to, price, callback }: IModalBuyButtonProps) => (
  <Link to={to}>
    <div className="buy-button">
      <button onClick={callback} className="Button bright" type="button">
        <span>{`Добавить в корзину за ${price} ₽`}</span>
      </button>
    </div>
  </Link>
);

export default ModalBuyButton;

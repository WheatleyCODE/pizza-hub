import React from 'react';
import './DeliveryMessage.scss';

interface IDeliveryMessageProps {
  deliveryPrice: number;
  amount: number;
}

const DeliveryMessage: React.FC<IDeliveryMessageProps> = ({ deliveryPrice, amount }) => (
  <div className="DeliveryMessage">
    <i className="fa fa-car" aria-hidden="true" />
    <span>{`Для доставки добавте продукты еще на ${deliveryPrice - amount} ₽`}</span>
    <div className="DeliveryMessage__triangle" />
  </div>
);

export default DeliveryMessage;

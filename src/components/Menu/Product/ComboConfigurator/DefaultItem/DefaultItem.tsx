import React from 'react';
import { IDefaultProduct } from '@t/menu';
import './DefaultItem.scss';

interface IDefaultItemProps {
  product: IDefaultProduct,
  setIndex: () => void,
}

const DefaultItem = ({ product, setIndex }: IDefaultItemProps) => (
  <div aria-hidden="true" onClick={setIndex} className="DefaultItem">
    <div className="DefaultItem__img">
      <img src={product.url} alt={product.title} />
    </div>
    <div className="DefaultItem__description">
      <h5>{product.title}</h5>
      <span>{product.description}</span>
    </div>
  </div>
);

export default DefaultItem;

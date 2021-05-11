import React from 'react';
import { IComboProduct } from '../../../../types/menu';
import './ComboProduct.scss';

interface IComboProductProps {
  product: IComboProduct,
}

const KomboProduct = ({ product }: IComboProductProps) => {
  const {
    parts,
    title,
    description,
    url,
  } = product;

  return (
    <div className="KomboProduct">
      <div className="KomboProduct__left-container">
        <div className="left-container__description">
          <div className="left-container__description__title">{title}</div>
          <div className="left-container__description__description">{description}</div>
        </div>
        { parts.map(() => (
          <div className="left-container__current">One</div>
        )) }
      </div>
      <div className="KomboProduct__right-container">
        <div className="right-container__parts">
          <img className="parts__default-img" src={url} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default KomboProduct;

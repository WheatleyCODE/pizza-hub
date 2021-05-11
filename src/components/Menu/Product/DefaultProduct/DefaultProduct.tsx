import React from 'react';
import { IDefaultProduct } from '../../../../types/menu';
import Routes from '../../../../types/routes';
import ModalBuyButton from '../ModalBuyButton/ModalBuyButton';
import './DefaultProduct.scss';

interface IDefaultProductProps {
  product: IDefaultProduct,
}

const DefaultProduct = ({ product }: IDefaultProductProps) => {
  console.log('object');
  return (
    <div className="DefaultProduct">
      <div className="DefaultProduct__img-container">
        <img src={product.url} alt={product.title} />
      </div>
      <div className="DefaultProduct__description-container">
        <h1 className="DefaultProduct__description-container__title">{product.title}</h1>
        <div className="DefaultProduct__description-container__description">
          {product.description}
        </div>
        <div className="DefaultProduct__description-container__button">
          <ModalBuyButton
            to={Routes.HOME_ROUTE}
            price={product.price}
            callback={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultProduct;

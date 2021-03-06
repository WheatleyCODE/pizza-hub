import React from 'react';
import { useActions } from '@hooks';
import { IDefaultProduct } from '@t/menu';
import Routes from '@t/routes';
import ModalBuyButton from '../ModalBuyButton';
import './DefaultProduct.scss';

interface IDefaultProductProps {
  product: IDefaultProduct;
  route?: Routes;
  closeModal?: () => void;
}

const DefaultProduct: React.FC<IDefaultProductProps> = ({ product, route, closeModal }) => {
  const { addToBasket } = useActions();

  let router = Routes.HOME_ROUTE;
  if (route) router = route;

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
            to={router}
            price={product.price}
            callback={() => {
              addToBasket({
                amount: 1,
                id: Math.random() * 10000,
                url: product.url,
                title: product.title,
                currentPrice: product.price,
                moreInfo: {
                  defaultIngredients: null,
                  moreIngredients: null,
                  size: null,
                  dough: null,
                  pizzaSize: null,
                  combo: null,
                },
              });

              if (closeModal) {
                closeModal();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultProduct;

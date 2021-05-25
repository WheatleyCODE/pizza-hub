import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import BasketButton from '@ui/BasketButton';
import Loader from '@ui/Loader';
import { useActions, useTypedSelector } from '@hooks';
import { IProduct, IDefaultProduct, IComboProduct } from '@t/menu';
import Product from './Product';
import './Menu.scss';

const Menu: React.FC = () => {
  const { menu, loading } = useTypedSelector((state) => state.menu);
  const { fetchMenu } = useActions();

  useEffect(() => {
    fetchMenu();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="Menu">
      <div className="Menu__container">
        {menu.map((coll) => (
          <Element
            name={coll.collectionName}
            key={coll.collectionName}
            className="container__collection"
          >
            <h2 className="colection__title">{coll.collectionName}</h2>
            <div className="colection__product-container">
              {coll.collection.map(
                (product: IProduct | IDefaultProduct | IComboProduct, i: number) => (
                  <Product key={i} product={product} />
                )
              )}
            </div>
          </Element>
        ))}
      </div>
      <BasketButton />
    </div>
  );
};

export default Menu;

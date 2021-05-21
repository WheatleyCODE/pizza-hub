import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import useActions from '../../hooks/useAction';
import Product from './Product/Product';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader/Loader';
import { IProduct, IDefaultProduct, IComboProduct } from '../../types/menu';
import BasketButton from '../UI/BasketButton/BasketButton';
import './Menu.scss';

const Menu = () => {
  const { menu, loading } = useTypedSelector((state) => state.menu);
  const { fetchMenu } = useActions();

  useEffect(() => {
    fetchMenu();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="Menu">
      <div className="Menu__container">
        { menu.map((coll) => (
          <Element name={coll.collectionName} key={coll.collectionName} className="container__collection">
            <h2 className="colection__title">{coll.collectionName}</h2>
            <div className="colection__product-container">
              { coll.collection.map(
                (product: IProduct | IDefaultProduct | IComboProduct, i: number) => (
                  <Product
                    key={i}
                    product={product}
                  />
                ),
              ) }
            </div>
          </Element>
        )) }
      </div>
      <BasketButton />
    </div>
  );
};

export default Menu;

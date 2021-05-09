/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import useActions from '../../hooks/useAction';
import Product from './Product/Product';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader/Loader';
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
          <div key={coll.collectionName} className="container__colection">
            <h1 className="colection__title">{coll.collectionName}</h1>
            <div className="colection__product-container">
              { coll.collection.map((product, i) => (
                <Route
                  key={i}
                  path="/"
                  render={({ history, match, location }: RouteComponentProps) => (
                    <Product
                      match={match}
                      location={location}
                      history={history}
                      product={product}
                      collectionName={coll.collectionName}
                    />
                  )}
                />
              )) }
            </div>
          </div>
        )) }
      </div>
    </div>
  );
};

export default Menu;

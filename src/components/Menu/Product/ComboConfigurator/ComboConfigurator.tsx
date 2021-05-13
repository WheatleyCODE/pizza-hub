/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import useActions from '../../../../hooks/useAction';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { ICurrentCombo } from '../../../../types/comboConfigurator';
import {
  IComboPizza,
  IComboProduct,
  IDefaultProduct,
  IOneDoughTraditional,
  IProduct,
  ITwoDough,
  PizzaDataKeyNamesDough,
} from '../../../../types/menu';
import DefaultItem from './DefaultItem/DefaultItem';
import ProductItem from './ProductItem/ProductItem';
import PizzaItem from './PizzaItem/PizzaItem';
import ModalBuyButton from '../ModalBuyButton/ModalBuyButton';
import Routes from '../../../../types/routes';
import './ComboConfigurator.scss';

interface IComboProductProps {
  product: IComboProduct,
}

const ComboConfigurator = ({ product }: IComboProductProps) => {
  const {
    setCurrentCombo,
    changePartsIndex,
    changeCombo,
    addToBasket,
  } = useActions();
  const { currentCombo, partsIndex } = useTypedSelector((state) => state.comboConfigurator);
  const [doughThin, setDoughThin] = useState<undefined | IComboPizza[]>(undefined);
  const [doughTraditional, setDoughTraditional] = useState<undefined | IComboPizza[]>(undefined);
  const [dou, setDou] = useState(PizzaDataKeyNamesDough.DOUGH_TRADITIONAL);

  const {
    parts,
    title,
    description,
    url,
    price,
  } = product;

  let components: any;
  if (partsIndex !== null && Array.isArray(product.parts[partsIndex])) {
    const prod = product.parts[partsIndex] as IProduct[];
    components = prod.map((el, i) => (
      <ProductItem
        key={el.title}
        callback={() => changeCombo(prod[i])}
        title={el.title}
        url={el.url}
        partsIndex={partsIndex}
      />
    ));
  } else if (partsIndex !== null && doughThin !== undefined && doughTraditional !== undefined) {
    const prod = product.parts[partsIndex] as ITwoDough;
    if (product.parts[partsIndex] !== undefined) {
      components = prod[dou].map((el) => (
        <ProductItem
          key={el.title}
          callback={() => changeCombo(el)}
          title={el.title}
          url={el.url}
          size={el.size}
          partsIndex={partsIndex}
        />
      ));
    }
  } else if (partsIndex !== null && doughTraditional !== undefined) {
    const prod = product.parts[partsIndex] as IOneDoughTraditional;
    components = prod.doughTraditional.map((el) => (
      <ProductItem
        key={el.title}
        callback={() => changeCombo(el)}
        title={el.title}
        url={el.url}
        size={el.size}
        partsIndex={partsIndex}
      />
    ));
  }

  useEffect(() => {
    const currentComb: ICurrentCombo[] = [];
    parts.forEach((el: any) => {
      if (Array.isArray(el)) {
        currentComb.push({
          isPizza: false,
          item: el[0],
        });
      } else {
        currentComb.push({
          isPizza: true,
          item: el.doughTraditional[0],
        });
        setDoughThin(el.doughThin);
        setDoughTraditional(el.doughTraditional);
      }
    });
    setCurrentCombo(currentComb);
  }, []);

  const print = (i: number, dough: PizzaDataKeyNamesDough) => {
    setDou(dough);
    changePartsIndex(i);
  };

  const noPromoPrice = currentCombo.reduce((total, obj) => total + obj.item.price, 0);

  return (
    <div className="ComboConfigurator">
      <div>
        <div className="ComboConfigurator__left-container">
          <div className="left-container__description">
            <div className="left-container__description__title">{title}</div>
            <div className="left-container__description__description">{description}</div>
          </div>
          { currentCombo.map((el, i) => {
            const productDefault = el.item as IDefaultProduct;
            const productPizza = el.item as IComboPizza;
            if (productPizza.size === undefined) {
              return (
                <div key={i} className={`left-container__current ${partsIndex === i ? 'target' : ''}`}>
                  <DefaultItem setIndex={() => changePartsIndex(i)} product={productDefault} />
                </div>
              );
            }
            if (doughThin !== undefined && doughTraditional !== undefined) {
              return (
                <div key={i} className={`left-container__current ${partsIndex === i ? 'target' : ''}`}>
                  <PizzaItem
                    print={print}
                    comboPizza={productPizza}
                    comboPizzaThin={doughThin[i]}
                    comboPizzaTraditional={doughTraditional[i]}
                    changeCombo={changeCombo}
                    index={i}
                  />
                </div>
              );
            }
            if (doughTraditional !== undefined) {
              return (
                <div key={i} className={`left-container__current ${partsIndex === i ? 'target' : ''}`}>
                  <PizzaItem
                    print={print}
                    comboPizza={productPizza}
                    comboPizzaThin={undefined}
                    comboPizzaTraditional={doughTraditional[i]}
                    changeCombo={changeCombo}
                    index={i}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="no-promo-price">
          {noPromoPrice > price ? (
            <>
              <span className="no-promo-price__title">Стоимость:</span>
              <div className="no-promo-price__container">
                <span className="no-promo-price__container__prev-price">{`${noPromoPrice} ₽`}</span>
                <span className="no-promo-price__container__current-price">{`${price} ₽`}</span>
              </div>
            </>
          ) : null}
        </div>
        <ModalBuyButton
          to={Routes.HOME_ROUTE}
          price={price}
          callback={() => addToBasket({
            amount: 1,
            id: Math.random() * 10000,
            url: product.url,
            title: product.title,
            currentPrice: product.price,
            moreInfo: {
              defaultIngredients: null,
              moreIngredients: null,
              dough: null,
              pizzaSize: null,
              size: null,
              combo: currentCombo,
            },
          })}
        />
      </div>
      <div className="ComboConfigurator__right-container">
        <div className="right-container__parts">
          { partsIndex === null ? <img className="parts__default-img" src={url} alt={title} /> : components }
        </div>
      </div>
    </div>
  );
};

export default ComboConfigurator;

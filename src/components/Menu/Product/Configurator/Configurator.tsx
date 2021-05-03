import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IProduct } from '../../../../types/menu';
import RadioButtons from '../../../UI/Radio/RadioButtons';
import './Configurator.scss';

interface ProductProps {
  product: IProduct
}

const Configurator = ({ product } :ProductProps) => {
  const [pizzaSize, setPizzaSize] = useState<keyof typeof pizzaDate.doughThin>('medium');
  const [dough, setDough] = useState<keyof typeof pizzaDate>('doughTraditional');

  const {
    description,
    moreIngredients,
    pizzaDate,
    title,
  } = product;

  const {
    price,
    url,
    wight,
    size,
  } = pizzaDate[dough][pizzaSize];

  let radioStyle = '';
  if (pizzaSize !== 'medium' && pizzaSize !== 'large') {
    radioStyle = 'disable';
  }

  const onChangeSizeRadio = (value: any) => {
    if (dough === 'doughThin' && value === 'small') {
      setDough('doughTraditional');
    }
    setPizzaSize(value);
  };

  return (
    <div className="configurator">
      <div className="configurator__img-container">
        <div className={`img-container__img ${pizzaSize}`}>
          <CSSTransition
            in={url != null}
            timeout={300}
            classNames="modal"
            mountOnEnter
            unmountOnExit
          >
            <img src={url} alt="img" />
          </CSSTransition>
        </div>
      </div>

      <div className="right">
        <div className="configurator__menu-container">
          <div className="menu-container">
            <h2 className="menu-container__title">{title}</h2>
            <span className="menu-container__description">{`${size} см, ${dough === 'doughTraditional' ? 'традиционное' : 'тонкое'} тесто, ${wight} г`}</span>
            <div className="menu-container__ingr-block">
              { description }
            </div>
            <div className="menu-container__buttons-container">
              <div className="buttons-container__size">
                <RadioButtons
                  buttons={[
                    { title: 'Маленькая', value: 'small', style: '' },
                    { title: 'Cредняя', value: 'medium', style: '' },
                    { title: 'Большая', value: 'large', style: '' },
                  ]}
                  selected={pizzaSize}
                  onChange={(
                    value: keyof typeof pizzaDate.doughThin
                    | keyof typeof pizzaDate.doughThin,
                  ) => {
                    onChangeSizeRadio(value);
                  }}
                />
              </div>
              <div className="buttons-container__dough">
                <RadioButtons
                  buttons={[
                    { title: 'Традиционное', value: 'doughTraditional', style: '' },
                    { title: 'Тонкое', value: 'doughThin', style: radioStyle },
                  ]}
                  selected={dough}
                  onChange={(value :keyof typeof pizzaDate) => {
                    setDough(value);
                  }}
                />
              </div>
              <div className="buttons-container__add-ingr">
                <h2 className="buttons-container__title">Добавить в пицу</h2>
                <div className="buttons-container__ing-container">
                  { moreIngredients.map((ing) => (
                    <div key={ing.id} className="moreIngredients">
                      <img src={ing.url} alt="ing" />
                      <h5 className="moreIngredients__title">{ing.title}</h5>
                      <span className="moreIngredients__price">{`${ing.price}р`}</span>
                    </div>
                  )) }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buy-button">
          <button className="Button bright" type="button">
            <span>{`Купить за ${price}р`}</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Configurator;

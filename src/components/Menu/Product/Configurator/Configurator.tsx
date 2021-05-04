import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  IDefaultIng,
  IProduct,
  PizzaDataKeyNames,
  IMoreIng,
} from '../../../../types/menu';
import RadioButtons from '../../../UI/Radio/RadioButtons';
import AddIngredient from './AddIngredient/AddIngredient';
import './Configurator.scss';
import RemoveIngredients from './RemoveIngredients/RemoveIngredients';

interface IProductProps {
  product: IProduct
}

const Configurator = ({ product }: IProductProps) => {
  const [
    pizzaSize,
    setPizzaSize,
  ] = useState<keyof typeof pizzaDate.doughThin>(PizzaDataKeyNames.MEDIUM);
  const [dough, setDough] = useState<keyof typeof pizzaDate>(PizzaDataKeyNames.DOUGH_TRADITIONAL);
  const [additionalСost, setAdditionalСost] = useState(0);

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

  const [
    defaultIngredients,
    setDefaultIngredients,
  ] = useState(description.split(', ').map((text) => ({ title: text, add: true })));

  const [
    moreIng,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setMoreIng,
  ] = useState(moreIngredients.map((obj) => ({ ...obj, add: false })));

  const changeDefaultIng = (ing: IDefaultIng) => {
    const newDefIng = [...defaultIngredients];
    const index = newDefIng.findIndex((obj) => obj.title === ing.title);
    newDefIng.splice(index, 1, ing);

    setDefaultIngredients(newDefIng);
  };

  const changeMoreIng = (ing: IMoreIng) => {
    const newMoreIng = [...moreIng];
    const index = newMoreIng.findIndex((obj) => obj.title === ing.title);
    newMoreIng.splice(index, 1, ing);

    setMoreIng(newMoreIng);
  };

  const onChangeSizeRadio = (value: any) => {
    if (dough === PizzaDataKeyNames.DOUGH_THIN && value === PizzaDataKeyNames.SMALL) {
      setDough(PizzaDataKeyNames.DOUGH_TRADITIONAL);
    }
    setPizzaSize(value);
  };

  const addPrice = (currentIngPrice: number) => {
    setAdditionalСost((prev) => prev + currentIngPrice);
  };

  let disableStyle = '';
  if (pizzaSize !== PizzaDataKeyNames.MEDIUM && pizzaSize !== PizzaDataKeyNames.LARGE) {
    disableStyle = 'disable';
  }

  let disableElem = '';
  if (pizzaSize !== PizzaDataKeyNames.MEDIUM && pizzaSize !== PizzaDataKeyNames.LARGE) {
    disableElem = 'Сырный бортик';
  }

  const radioButtonsSize = [
    { title: 'Маленькая', value: PizzaDataKeyNames.SMALL, style: '' },
    { title: 'Cредняя', value: PizzaDataKeyNames.MEDIUM, style: '' },
    { title: 'Большая', value: PizzaDataKeyNames.LARGE, style: '' },
  ];

  const radioButtonsDough = [
    { title: 'Традиционное', value: PizzaDataKeyNames.DOUGH_TRADITIONAL, style: '' },
    { title: 'Тонкое', value: PizzaDataKeyNames.DOUGH_THIN, style: disableStyle },
  ];

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
              { defaultIngredients.map((ing) => (
                <RemoveIngredients
                  changeDefaultIng={changeDefaultIng}
                  key={ing.title}
                  ing={ing}
                />
              ))}
            </div>
            <div className="menu-container__buttons-container">
              <div className="buttons-container__size">
                <RadioButtons
                  buttons={radioButtonsSize}
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
                  buttons={radioButtonsDough}
                  selected={dough}
                  onChange={(value :keyof typeof pizzaDate) => {
                    setDough(value);
                  }}
                />
              </div>
              <div className="buttons-container__add-ingr">
                <h2 className="buttons-container__title">Добавить в пицу</h2>
                <div className="buttons-container__ing-container">
                  {moreIng.map((ing) => (
                    <AddIngredient
                      changeMoreIng={changeMoreIng}
                      pizzaSize={pizzaSize}
                      addPrice={addPrice}
                      ing={ing}
                      key={ing.id}
                      disableElem={disableElem}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buy-button">
          <button className="Button bright" type="button">
            <span>{`Купить за ${price + additionalСost}р`}</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Configurator;

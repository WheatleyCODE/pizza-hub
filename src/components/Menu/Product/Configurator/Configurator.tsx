import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import useActions from '../../../../hooks/useAction';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import {
  IProduct,
  PizzaDataKeyNames,
  PizzaDataKeyNamesDough,
  PizzaDataKeyNamesPizzaSize,
} from '../../../../types/menu';
import RadioButtons from '../../../UI/Radio/RadioButtons';
import AddIngredient from './AddIngredient/AddIngredient';
import RemoveIngredients from './RemoveIngredients/RemoveIngredients';
import './Configurator.scss';

interface IProductProps {
  product: IProduct
}

const Configurator = ({ product }: IProductProps) => {
  const {
    description,
    moreIngredients,
    pizzaDate,
    title,
  } = product;

  const { currentPizza } = useTypedSelector((state) => state.configurator);
  const { dough, pizzaSize } = currentPizza;

  const {
    price,
    url,
    wight,
    size,
  } = pizzaDate[dough][pizzaSize];

  const {
    setCurrentPizza,
    changeDefaultIng,
    changeMoreIng,
    changeDough,
    changePizzaSize,
    changeCurrentPrice,
    priceRecalculation,
    updateInfo,
    addToBasket,
  } = useActions();

  useEffect(() => {
    setCurrentPizza({
      defaultIngredients: description,
      moreIngredients,
      dough: PizzaDataKeyNamesDough.DOUGH_TRADITIONAL,
      pizzaSize: PizzaDataKeyNamesPizzaSize.MEDIUM,
      currentPrice: price,
      murkUp: 0,
      pizzaInfo: {
        description,
        title,
        url,
        wight,
        size,
      },
    });
  }, []);

  useEffect(() => {
    updateInfo({
      description,
      title,
      url,
      wight,
      size,
    });
  }, [dough, pizzaSize]);

  useEffect(() => {
    changeCurrentPrice(price);

    const ingredient = currentPizza.moreIngredients.find((el) => el.title === 'Сырный бортик');
    if (ingredient?.add
      && pizzaSize !== PizzaDataKeyNamesPizzaSize.MEDIUM
      && pizzaSize !== PizzaDataKeyNamesPizzaSize.LARGE) {
      priceRecalculation(ingredient, price);
    }
  }, [pizzaSize]);

  const onChangeSizeRadio = (value: any) => {
    if (dough === PizzaDataKeyNamesDough.DOUGH_THIN && value === PizzaDataKeyNames.SMALL) {
      changeDough(PizzaDataKeyNamesDough.DOUGH_TRADITIONAL);
    }
    changePizzaSize(value);
  };

  let disableStyle = '';
  if (pizzaSize !== PizzaDataKeyNamesPizzaSize.MEDIUM
      && pizzaSize !== PizzaDataKeyNamesPizzaSize.LARGE) {
    disableStyle = 'disable';
  }

  let disableElem = '';
  if (pizzaSize !== PizzaDataKeyNamesPizzaSize.MEDIUM
      && pizzaSize !== PizzaDataKeyNamesPizzaSize.LARGE) {
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
              { currentPizza.defaultIngredients.map((ing) => (
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
                  onChange={(value: any) => {
                    onChangeSizeRadio(value);
                  }}
                />
              </div>
              <div className="buttons-container__dough">
                <RadioButtons
                  buttons={radioButtonsDough}
                  selected={dough}
                  onChange={(value: PizzaDataKeyNamesDough) => {
                    changeDough(value);
                  }}
                />
              </div>
              <div className="buttons-container__add-ingr">
                <h2 className="buttons-container__title">Добавить в пицу</h2>
                <div className="buttons-container__ing-container">
                  {currentPizza.moreIngredients.map((ing) => (
                    <AddIngredient
                      changeMoreIng={changeMoreIng}
                      murkUp={currentPizza.murkUp}
                      changeCurrentPrice={() => changeCurrentPrice(price)}
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
          <button onClick={() => { addToBasket({ product: currentPizza, amount: 1 }); }} className="Button bright" type="button">
            <span>{`Добавить в корзину за ${currentPizza.currentPrice}р`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configurator;

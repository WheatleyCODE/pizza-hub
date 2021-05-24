import { Dispatch } from 'react';
import {
  IPizzaInfo,
  ConfiguratorActionTypes,
  ConfiguratorAction,
  IPizzaFirstData,
} from '@t/configurator';
import {
  IMoreIng,
  IDefaultIng,
  PizzaDataKeyNamesDough,
  PizzaDataKeyNamesPizzaSize,
} from '@t/menu';

export const setCurrentPizza = (currentPizza: IPizzaFirstData): ConfiguratorAction => ({
  type: ConfiguratorActionTypes.SET_CURRENT_PIZZA,
  payload: currentPizza,
});

export const changeDefaultIng = (ing: IDefaultIng): ConfiguratorAction => ({
  type: ConfiguratorActionTypes.CHANGE_DEFAULT_ING,
  payload: ing,
});

export const changeMoreIng = (ing: IMoreIng): ConfiguratorAction => ({
  type: ConfiguratorActionTypes.CHANGE_MORE_ING,
  payload: ing,
});

export const changeDough = (value: PizzaDataKeyNamesDough): ConfiguratorAction => ({
  type: ConfiguratorActionTypes.CHANGE_DOUGH,
  payload: value,
});

export const changePizzaSize = (value: PizzaDataKeyNamesPizzaSize): ConfiguratorAction => ({
  type: ConfiguratorActionTypes.CHANGE_PIZZA_SIZE,
  payload: value,
});

export const changeCurrentPrice = (num: number): ConfiguratorAction => ({
  type: ConfiguratorActionTypes.CHANGE_CURRENT_PRICE,
  payload: num,
});

export const updateInfo = (info: IPizzaInfo): ConfiguratorAction => ({
  type: ConfiguratorActionTypes.UPDATE_INFO,
  payload: info,
});

export const priceRecalculation = (ing: IMoreIng, price: number) => (
  (dispatch: Dispatch<ConfiguratorAction>) => {
    const newIng = { ...ing, add: false };
    dispatch(changeMoreIng(newIng));
    dispatch(changeCurrentPrice(price));
  }
);

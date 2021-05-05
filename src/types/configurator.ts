import {
  IDefaultIng,
  IIngredients,
  IMoreIng,
  PizzaDataKeyNamesDough,
  PizzaDataKeyNamesPizzaSize,
} from './menu';

export interface IPizzaInfo {
  description: string,
  title: string,
  url: string,
  wight: number,
  size: number,
}

export interface ICurrentPizza {
  defaultIngredients: IDefaultIng[],
  moreIngredients: IMoreIng[],
  dough: PizzaDataKeyNamesDough,
  pizzaSize: PizzaDataKeyNamesPizzaSize,
  currentPrice: number,
  murkUp: number,
  pizzaInfo: IPizzaInfo,
}

export interface IConfiguratorState {
  currentPizza: ICurrentPizza,
}

export enum ConfiguratorActionTypes {
  SET_CURRENT_PIZZA = 'SET_CURRENT_PIZZA',
  CHANGE_DEFAULT_ING = 'CHANGE_DEFAULT_ING',
  CHANGE_MORE_ING = 'CHANGE_MORE_ING',
  CHANGE_DOUGH = 'CHANGE_DOUGH',
  CHANGE_PIZZA_SIZE = 'CHANGE_PIZZA_SIZE',
  CHANGE_CURRENT_PRICE = 'CHANGE_CURRENT_PRICE',
  PRICE_RECALCULATION = 'PRICE_RECALCULATION',
  UPDATE_INFO = 'UPDATE_INFO',
}

export interface IPizzaFirstData {
  defaultIngredients: string,
  moreIngredients: IIngredients[],
  dough: PizzaDataKeyNamesDough,
  pizzaSize: PizzaDataKeyNamesPizzaSize,
  currentPrice: number,
  murkUp: number,
  pizzaInfo: IPizzaInfo,
}

interface ISetCurrentPizzaAction {
  type: ConfiguratorActionTypes.SET_CURRENT_PIZZA,
  payload: IPizzaFirstData,
}

interface IChangeDefaultIngAction {
  type: ConfiguratorActionTypes.CHANGE_DEFAULT_ING,
  payload: IDefaultIng,
}

interface IChangeMoreIngAction {
  type: ConfiguratorActionTypes.CHANGE_MORE_ING,
  payload: IMoreIng,
}

interface IChangeDoughAction {
  type: ConfiguratorActionTypes.CHANGE_DOUGH,
  payload: PizzaDataKeyNamesDough,
}

interface IChangePizzaSizeAction {
  type: ConfiguratorActionTypes.CHANGE_PIZZA_SIZE,
  payload: PizzaDataKeyNamesPizzaSize,
}

interface IChangeCurrentPriceAction {
  type: ConfiguratorActionTypes.CHANGE_CURRENT_PRICE,
  payload: number,
}

interface IPriceRecalculationAction {
  type: ConfiguratorActionTypes.PRICE_RECALCULATION,
  payload: IMoreIng,
}

interface IUpdateInfoAction {
  type: ConfiguratorActionTypes.UPDATE_INFO,
  payload: IPizzaInfo,
}

export type ConfiguratorAction =
  ISetCurrentPizzaAction
  | IChangeDefaultIngAction
  | IChangeMoreIngAction
  | IChangeDoughAction
  | IChangePizzaSizeAction
  | IChangeCurrentPriceAction
  | IPriceRecalculationAction
  | IUpdateInfoAction;

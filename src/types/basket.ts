import { ICurrentPizza } from './configurator';

export interface IBasketItem {
  product: ICurrentPizza,
  amount: number,
  id: number,
}

export interface IBasketState {
  basket: IBasketItem[]
}

export enum BasketActionTypes {
  ADD_TO_BASKET = 'ADD_TO_BASKET',
  CHANGE_AMOUNT = 'CHANGE_AMOUNT',
  DELETE_FROM_BASKET = 'DELETE_FROM_BASKET',
}

interface IAddToBasketAction {
  type: BasketActionTypes.ADD_TO_BASKET,
  payload: IBasketItem,
}

interface IChangeAmountAction {
  type: BasketActionTypes.CHANGE_AMOUNT,
  payload: {
    num: number,
    id: number,
  },
}

interface IDeleteFromBasketAction {
  type: BasketActionTypes.DELETE_FROM_BASKET,
  payload: number
}

export type BasketAction = IAddToBasketAction | IChangeAmountAction | IDeleteFromBasketAction;

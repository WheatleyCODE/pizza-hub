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
}

interface ISAddToBasketAction {
  type: BasketActionTypes.ADD_TO_BASKET,
  payload: IBasketItem,
}

export type BasketAction = ISAddToBasketAction;

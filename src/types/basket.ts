import { ICurrentPizza } from './configurator';

export interface IBasketItem {
  product: ICurrentPizza,
  amount: number,
  id: number,
}

export interface IOrder {
  email: string
  city: string,
  userId: string,
  order: IBasketItem[],
  amount: number,
}

export interface IBasketState {
  basket: IBasketItem[],
  postMessage: string | null,
}

export enum BasketActionTypes {
  ADD_TO_BASKET = 'ADD_TO_BASKET',
  CHANGE_AMOUNT = 'CHANGE_AMOUNT',
  DELETE_FROM_BASKET = 'DELETE_FROM_BASKET',
  POST_ORDER = 'POST_ORDER',
  POST_ORDER_SUCCES = 'POST_ORDER_SUCCES',
  POST_ORDER_ERROR = 'POST_ORDER_ERROR',
  CLEAR_BASKET = 'CLEAR_BASKET',
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

interface IPostOrderAction {
  type: BasketActionTypes.POST_ORDER,
}

interface IPostSuccesAction {
  type: BasketActionTypes.POST_ORDER_SUCCES,
  payload: string,
}

interface IPostErrorAction {
  type: BasketActionTypes.POST_ORDER_ERROR,
}

interface IClearBasket {
  type: BasketActionTypes.CLEAR_BASKET,
}

export type BasketAction =
  IAddToBasketAction
  | IChangeAmountAction
  | IDeleteFromBasketAction
  | IPostOrderAction
  | IPostSuccesAction
  | IPostErrorAction
  | IClearBasket;

import { ICurrentCombo } from './comboConfigurator';
import {
  PizzaDataKeyNamesDough,
  PizzaDataKeyNamesPizzaSize,
  IMoreIng,
  IDefaultIng,
  IDefaultProduct,
} from './menu';

export interface IBasketItem {
  amount: number;
  id: number;
  url: string;
  title: string;
  currentPrice: number;
  moreInfo: {
    defaultIngredients: IDefaultIng[] | null;
    moreIngredients: IMoreIng[] | null;
    size: number | null;
    dough: PizzaDataKeyNamesDough | null;
    pizzaSize: PizzaDataKeyNamesPizzaSize | null;
    combo: ICurrentCombo[] | null;
  };
}

export interface IOrder {
  email: string;
  city: string;
  userId: string;
  order: IBasketItem[];
  amount: number;
}

export interface IBasketState {
  basket: IBasketItem[];
  postMessage: string | null;
  changes: string[];
  products: IDefaultProduct[];
  productsLoading: boolean;
  productsError: null | string;
  promoMult: number;
  usePromo: boolean;
}

export enum BasketActionTypes {
  ADD_TO_BASKET = 'ADD_TO_BASKET',
  CHANGE_AMOUNT = 'CHANGE_AMOUNT',
  DELETE_FROM_BASKET = 'DELETE_FROM_BASKET',
  POST_ORDER = 'POST_ORDER',
  POST_ORDER_SUCCES = 'POST_ORDER_SUCCES',
  POST_ORDER_ERROR = 'POST_ORDER_ERROR',
  CLEAR_BASKET = 'CLEAR_BASKET',
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCES = 'FETCH_PRODUCTS_SUCCES',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  SET_PROMO = 'SET_PROMO',
}

interface IFetchProductsAction {
  type: BasketActionTypes.FETCH_PRODUCTS;
}

interface IFetchProductsSuccesAction {
  type: BasketActionTypes.FETCH_PRODUCTS_SUCCES;
  payload: IDefaultProduct[];
}

interface IFetchProductsErrorAction {
  type: BasketActionTypes.FETCH_PRODUCTS_ERROR;
}

interface IAddToBasketAction {
  type: BasketActionTypes.ADD_TO_BASKET;
  payload: {
    product: IBasketItem;
    writeChange: boolean;
  };
}

interface IChangeAmountAction {
  type: BasketActionTypes.CHANGE_AMOUNT;
  payload: {
    num: number;
    id: number;
  };
}

interface IDeleteFromBasketAction {
  type: BasketActionTypes.DELETE_FROM_BASKET;
  payload: number;
}

interface IPostOrderAction {
  type: BasketActionTypes.POST_ORDER;
}

interface IPostSuccesAction {
  type: BasketActionTypes.POST_ORDER_SUCCES;
  payload: string;
}

interface IPostErrorAction {
  type: BasketActionTypes.POST_ORDER_ERROR;
}

interface IClearBasket {
  type: BasketActionTypes.CLEAR_BASKET;
}

interface ISetPromoBasket {
  type: BasketActionTypes.SET_PROMO;
  payload: {
    promoMult: number;
    usePromo: boolean;
  };
}

export type BasketAction =
  | IAddToBasketAction
  | IChangeAmountAction
  | IDeleteFromBasketAction
  | IPostOrderAction
  | IPostSuccesAction
  | IPostErrorAction
  | IClearBasket
  | IFetchProductsAction
  | IFetchProductsErrorAction
  | IFetchProductsSuccesAction
  | ISetPromoBasket;

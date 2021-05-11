import { Dispatch } from 'react';
import axios from '../../axios/axios-default';
import {
  BasketAction,
  BasketActionTypes,
  IBasketItem,
  IOrder,
} from '../../types/basket';

export const addToBasket = (product: IBasketItem): BasketAction => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  payload: product,
});

export const autoAddToBasket = () => (
  (dispatch: Dispatch<BasketAction>) => {
    const basket = localStorage.getItem('basket');
    if (basket) {
      const basketArr: IBasketItem[] = JSON.parse(basket);
      basketArr.forEach((item) => {
        dispatch(addToBasket(item));
      });
    }
  }
);

export const changeAmount = (num: number, id: number): BasketAction => ({
  type: BasketActionTypes.CHANGE_AMOUNT,
  payload: {
    num,
    id,
  },
});

export const deleteFromBasket = (id: number): BasketAction => ({
  type: BasketActionTypes.DELETE_FROM_BASKET,
  payload: id,
});

const postOrderStart = (): BasketAction => ({
  type: BasketActionTypes.POST_ORDER,
});

const postOrderSucces = (text: string): BasketAction => ({
  type: BasketActionTypes.POST_ORDER_SUCCES,
  payload: text,
});

const postOrderError = (): BasketAction => ({
  type: BasketActionTypes.POST_ORDER_ERROR,
});

const clearBasket = (): BasketAction => ({
  type: BasketActionTypes.CLEAR_BASKET,
});

export const postOrder = (order: IOrder) => async (dispatch: Dispatch<BasketAction>) => {
  try {
    dispatch(postOrderStart());
    await axios.post('/orders.json', order);

    dispatch(postOrderSucces('Заказ отправлен!'));
    dispatch(clearBasket());
  } catch (e) {
    dispatch(postOrderError());
  }
};

import { Dispatch } from 'react';
import {
  BasketAction,
  BasketActionTypes,
  IBasketItem,
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

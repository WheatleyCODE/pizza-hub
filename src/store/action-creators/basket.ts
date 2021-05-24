import { Dispatch } from 'react';
import axios from '../../utils/axios/axios-default';
import {
  BasketAction,
  BasketActionTypes,
  IBasketItem,
  IOrder,
} from '../../types/basket';
import { IDefaultProduct } from '../../types/menu';
import { reduce } from '../../utils/reduce';

export const addToBasket = (product: IBasketItem, writeChange: boolean = true): BasketAction => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  payload: {
    product,
    writeChange,
  },
});

export const autoAddToBasket = () => (
  (dispatch: Dispatch<BasketAction>) => {
    const basket = localStorage.getItem('basket');
    if (basket) {
      const basketArr: IBasketItem[] = JSON.parse(basket);
      basketArr.forEach((item) => {
        dispatch(addToBasket(item, false));
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

const clearBasket = (): BasketAction => ({
  type: BasketActionTypes.CLEAR_BASKET,
});

export const postOrder = (order: IOrder) => async (dispatch: Dispatch<BasketAction>) => {
  try {
    dispatch(reduce(BasketActionTypes.POST_ORDER));
    await axios.post('/orders.json', order);

    dispatch(reduce(BasketActionTypes.POST_ORDER_SUCCES, 'Заказ отправлен!'));
    dispatch(clearBasket());
  } catch (e) {
    dispatch(reduce(BasketActionTypes.POST_ORDER_ERROR));
  }
};

export const fetchProducts = () => async (dispatch: Dispatch<BasketAction>) => {
  try {
    dispatch(reduce(BasketActionTypes.FETCH_PRODUCTS));

    const response = await axios.get('/products.json');
    const keys = Object.keys(response.data);
    const data: IDefaultProduct[][] = keys.map((key) => response.data[key]);

    dispatch(reduce(BasketActionTypes.FETCH_PRODUCTS_SUCCES, data[0]));
  } catch (e) {
    dispatch(reduce(BasketActionTypes.FETCH_PRODUCTS_ERROR));
  }
};

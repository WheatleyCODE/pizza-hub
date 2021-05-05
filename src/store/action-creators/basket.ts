import {
  BasketAction,
  BasketActionTypes,
  IBasketItem,
} from '../../types/basket';

// eslint-disable-next-line import/prefer-default-export
export const addToBasket = (product: IBasketItem): BasketAction => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  payload: product,
});

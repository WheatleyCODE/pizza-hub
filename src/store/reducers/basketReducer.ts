import { BasketAction, BasketActionTypes, IBasketState } from '../../types/basket';

const initialState: IBasketState = {
  basket: [],
};

const basketReducer = (state: IBasketState = initialState, action: BasketAction): IBasketState => {
  switch (action.type) {
    case BasketActionTypes.ADD_TO_BASKET: {
      const { basket } = state;
      basket.push(action.payload);
      return {
        ...state,
        basket,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default basketReducer;

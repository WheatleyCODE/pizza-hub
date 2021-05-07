import { BasketAction, BasketActionTypes, IBasketState } from '../../types/basket';

const initialState: IBasketState = {
  basket: [],
};

const basketReducer = (state: IBasketState = initialState, action: BasketAction): IBasketState => {
  switch (action.type) {
    case BasketActionTypes.ADD_TO_BASKET: {
      const { basket } = state;

      if (basket.length > 0) {
        const index = basket.findIndex((obj) => (
          JSON.stringify(obj.product) === JSON.stringify(action.payload.product)
        ));

        if (index === -1) {
          basket.push(action.payload);
        } else {
          basket[index].amount += 1;
        }
      }

      if (basket.length === 0) basket.push(action.payload);

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

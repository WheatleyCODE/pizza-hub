import { BasketAction, BasketActionTypes, IBasketState } from '../../types/basket';

const initialState: IBasketState = {
  basket: [],
  postMessage: null,
};

const basketReducer = (state: IBasketState = initialState, action: BasketAction): IBasketState => {
  const newBasket = [...state.basket];

  switch (action.type) {
    case BasketActionTypes.ADD_TO_BASKET: {
      if (newBasket.length > 0) {
        const index = newBasket.findIndex((obj) => (
          JSON.stringify(obj) === JSON.stringify(action.payload)
        ));
        if (index === -1) {
          newBasket.push(action.payload);
        } else {
          newBasket[index].amount += 1;
        }
      }

      if (newBasket.length === 0) newBasket.push(action.payload);

      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
        postMessage: null,
      };
    }

    case BasketActionTypes.CHANGE_AMOUNT: {
      const index = newBasket.findIndex((obj) => obj.id === action.payload.id);
      newBasket[index].amount += action.payload.num;
      if (newBasket[index].amount === 0) {
        newBasket.splice(index, 1);
      }
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    }

    case BasketActionTypes.DELETE_FROM_BASKET: {
      const index = newBasket.findIndex((obj) => obj.id === action.payload);
      newBasket.splice(index, 1);
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    }

    case BasketActionTypes.CLEAR_BASKET: {
      let clearedBasked = newBasket;
      clearedBasked = [];
      localStorage.setItem('basket', JSON.stringify(clearedBasked));
      return {
        ...state,
        basket: clearedBasked,
      };
    }

    case BasketActionTypes.POST_ORDER_SUCCES: {
      return {
        ...state,
        postMessage: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default basketReducer;

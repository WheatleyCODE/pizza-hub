import { BasketAction, BasketActionTypes, IBasketState } from '../../types/basket';

const initialState: IBasketState = {
  basket: [],
  postMessage: null,
  changes: [],
};

const basketReducer = (state: IBasketState = initialState, action: BasketAction): IBasketState => {
  const newBasket = [...state.basket];
  const newChanges = [...state.changes];

  // const messages = {
  //   add: 'Добавил',
  //   delete: 'Удалил',
  // };

  switch (action.type) {
    case BasketActionTypes.ADD_TO_BASKET: {
      if (newBasket.length > 0) {
        const index = newBasket.findIndex((obj) => (
          JSON.stringify(obj.currentPrice) === JSON.stringify(action.payload.currentPrice)
          && JSON.stringify(obj.moreInfo) === JSON.stringify(action.payload.moreInfo)
          && JSON.stringify(obj.title) === JSON.stringify(action.payload.title)
        ));
        if (index === -1) {
          newBasket.push(action.payload);
          newChanges.push(`Added ${action.payload.title}`);
        } else {
          newBasket[index].amount += 1;
          newChanges.push(`Added ${newBasket[index].title}`);
        }
      }

      if (newBasket.length === 0) {
        newBasket.push(action.payload);
        newChanges.push(`Added ${action.payload.title}`);
      }

      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
        postMessage: null,
        changes: newChanges,
      };
    }

    case BasketActionTypes.CHANGE_AMOUNT: {
      const index = newBasket.findIndex((obj) => obj.id === action.payload.id);
      newBasket[index].amount += action.payload.num;

      if (action.payload.num > 0) {
        newChanges.push(`Added ${newBasket[index].title}`);
      } else {
        newChanges.push(`Delete ${newBasket[index].title}`);
      }

      if (newBasket[index].amount === 0) {
        newBasket.splice(index, 1);
      }
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
        changes: newChanges,
      };
    }

    case BasketActionTypes.DELETE_FROM_BASKET: {
      const index = newBasket.findIndex((obj) => obj.id === action.payload);
      newChanges.push(`Delete ${newBasket[index].title}`);
      newBasket.splice(index, 1);
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
        changes: newChanges,
      };
    }

    case BasketActionTypes.CLEAR_BASKET: {
      let clearedBasked = newBasket;
      clearedBasked = [];
      localStorage.setItem('basket', JSON.stringify(clearedBasked));
      return {
        ...state,
        basket: clearedBasked,
        changes: [],
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

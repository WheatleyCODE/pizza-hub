import { BasketAction, BasketActionTypes, IBasketState } from '../../types/basket';

const initialState: IBasketState = {
  basket: [],
  postMessage: null,
  changes: [],
  products: [],
  productsLoading: false,
  productsError: null,
  promoMult: 1,
  usePromo: false,
};

const basketReducer = (state: IBasketState = initialState, action: BasketAction): IBasketState => {
  const newBasket = [...state.basket];
  const newChanges = [...state.changes];

  const messages = {
    add: (title: string) => `Добавлено ${title}`,
    del: (title: string) => `Удалено ${title}`,
  };

  switch (action.type) {
    case BasketActionTypes.ADD_TO_BASKET: {
      const { product, writeChange } = action.payload;
      const { currentPrice, moreInfo, title } = action.payload.product;

      if (newBasket.length > 0) {
        const index = newBasket.findIndex((obj) => (
          JSON.stringify(obj.currentPrice) === JSON.stringify(currentPrice)
          && JSON.stringify(obj.moreInfo) === JSON.stringify(moreInfo)
          && JSON.stringify(obj.title) === JSON.stringify(title)
        ));

        if (index === -1) {
          newBasket.push(product);
          if (writeChange) {
            newChanges.push(messages.add(title));
          }
        } else {
          newBasket[index].amount += 1;

          if (writeChange) {
            newChanges.push(messages.add(newBasket[index].title));
          }
        }
      }

      if (newBasket.length === 0) {
        newBasket.push(product);

        if (writeChange) {
          newChanges.push(messages.add(title));
        }
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
      const { id, num } = action.payload;

      const index = newBasket.findIndex((obj) => obj.id === id);
      newBasket[index].amount += num;

      if (num > 0) {
        newChanges.push(messages.add(newBasket[index].title));
      } else {
        newChanges.push(messages.del(newBasket[index].title));
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
      const index = newBasket.findIndex(({ id }) => id === action.payload);
      newChanges.push(messages.del(newBasket[index].title));
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

    case BasketActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        productsLoading: true,
      };

    case BasketActionTypes.FETCH_PRODUCTS_SUCCES:
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
      };

    case BasketActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        productsLoading: false,
      };

    case BasketActionTypes.SET_PROMO:
      return {
        ...state,
        usePromo: action.payload.usePromo,
        promoMult: action.payload.promoMult,
      };

    default:
      return {
        ...state,
      };
  }
};

export default basketReducer;

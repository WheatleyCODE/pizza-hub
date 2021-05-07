import { PizzaDataKeyNamesDough, PizzaDataKeyNamesPizzaSize } from '../../types/menu';
import { ConfiguratorAction, ConfiguratorActionTypes, IConfiguratorState } from '../../types/configurator';
import { replaceMurkUp } from '../../utils/replacement';

const initialState: IConfiguratorState = {
  currentPizza: {
    defaultIngredients: [],
    moreIngredients: [],
    dough: PizzaDataKeyNamesDough.DOUGH_TRADITIONAL,
    pizzaSize: PizzaDataKeyNamesPizzaSize.MEDIUM,
    currentPrice: 0,
    murkUp: 0,
    pizzaInfo: {
      description: '',
      title: '',
      url: '',
      wight: 0,
      size: 0,
    },
  },
};

const configuratorReducer = (
  state: IConfiguratorState = initialState,
  action: ConfiguratorAction,
): IConfiguratorState => {
  switch (action.type) {
    case ConfiguratorActionTypes.SET_CURRENT_PIZZA: {
      const defaultIngredients = action.payload.defaultIngredients.split(', ').map((text) => ({ title: text, add: true }));
      const moreIngredients = action.payload.moreIngredients.map((obj) => ({ ...obj, add: false }));
      return {
        currentPizza: {
          ...state.currentPizza,
          defaultIngredients,
          moreIngredients,
        },
      };
    }

    case ConfiguratorActionTypes.CHANGE_DEFAULT_ING: {
      const newDefIngs = [...state.currentPizza.defaultIngredients];
      const index = newDefIngs.findIndex((obj) => obj.title === action.payload.title);
      newDefIngs.splice(index, 1, action.payload);
      return {
        currentPizza: {
          ...state.currentPizza,
          defaultIngredients: newDefIngs,
        },
      };
    }

    case ConfiguratorActionTypes.CHANGE_MORE_ING: {
      const newMoreIng = [...state.currentPizza.moreIngredients];
      const index = newMoreIng.findIndex((obj) => obj.title === action.payload.title);
      newMoreIng.splice(index, 1, action.payload);
      return {
        currentPizza: {
          ...state.currentPizza,
          moreIngredients: newMoreIng,
        },
      };
    }

    case ConfiguratorActionTypes.CHANGE_DOUGH: {
      return {
        currentPizza: {
          ...state.currentPizza,
          dough: action.payload,
        },
      };
    }

    case ConfiguratorActionTypes.CHANGE_PIZZA_SIZE: {
      return {
        currentPizza: {
          ...state.currentPizza,
          pizzaSize: action.payload,
        },
      };
    }

    case ConfiguratorActionTypes.CHANGE_CURRENT_PRICE: {
      const { pizzaSize } = state.currentPizza;
      const murkUp: number = replaceMurkUp(pizzaSize);
      const pesult = state.currentPizza.moreIngredients.reduce((acc, obj) => {
        if (obj.add) {
          return (
            acc + obj.price + murkUp
          );
        }
        return acc;
      }, 0);
      return {
        currentPizza: {
          ...state.currentPizza,
          currentPrice: action.payload + pesult,
          murkUp,
        },
      };
    }

    case ConfiguratorActionTypes.UPDATE_INFO: {
      return {
        currentPizza: {
          ...state.currentPizza,
          pizzaInfo: action.payload,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default configuratorReducer;

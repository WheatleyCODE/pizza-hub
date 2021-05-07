import { PizzaDataKeyNamesPizzaSize, PizzaDataKeyNamesDough } from '../types/menu';

export const replaceMurkUp = (pizzaSize: PizzaDataKeyNamesPizzaSize): number => {
  switch (pizzaSize) {
    case PizzaDataKeyNamesPizzaSize.LARGE: return 20;
    case PizzaDataKeyNamesPizzaSize.MEDIUM: return 0;
    default: return -10;
  }
};

export const replaceDoughText = (dough: PizzaDataKeyNamesDough): string => {
  switch (dough) {
    case PizzaDataKeyNamesDough.DOUGH_THIN: return 'тонкое тесто';
    default: return 'традиционное тесто';
  }
};

export const replacePizzaSizeText = (pizzaSize: PizzaDataKeyNamesPizzaSize): string => {
  switch (pizzaSize) {
    case PizzaDataKeyNamesPizzaSize.LARGE: return 'Большая';
    case PizzaDataKeyNamesPizzaSize.MEDIUM: return 'Средняя';
    default: return 'Маленькая';
  }
};

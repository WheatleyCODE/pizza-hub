export interface Ingredients {
  title: string,
  url: string,
  price: number,
  id: number
}

export interface PizzaParam {
  size: number,
  wight: number,
  url: string,
  price: number,
}

export interface PizzaData {
  doughTraditional: {
    small: PizzaParam,
    medium: PizzaParam,
    large: PizzaParam,
  },
  doughThin: {
    medium: PizzaParam,
    large: PizzaParam,
  }
}

export interface IProduct {
  title: string,
  url: string,
  description: string,
  price: number,
  route: string,
  moreIngredients: Ingredients[],
  pizzaDate: PizzaData,
}

export interface Collection {
  collection: IProduct[],
  collectionName: string,
}

export interface MenuState {
  menu: Collection[],
  loading: boolean,
  error: null | string
}

export enum MenuActionTypes {
  FETCH_MENU = 'FETCH_MENU',
  FETCH_MENU_SUCCES = 'FETCH_MENU_SUCCES',
  FETCH_MENU_ERROR = 'FETCH_MENU_ERROR',
}
interface FetchMenuAction {
  type: MenuActionTypes.FETCH_MENU,
}
interface FetchMenuSuccesAction {
  type: MenuActionTypes.FETCH_MENU_SUCCES,
  payload: any[],
}
interface FetchMenuErrorAction {
  type: MenuActionTypes.FETCH_MENU_ERROR,
  payload: string,
}

export type MenuAction = FetchMenuAction | FetchMenuSuccesAction | FetchMenuErrorAction;

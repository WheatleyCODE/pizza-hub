export interface IComboPizza {
  title: string,
  url: string,
  description: string,
  price: number,
  size: number,
}

export interface IOneDoughTraditional {
  doughTraditional: IComboPizza[],
  doughThin: null,
}

export interface ITwoDough {
  doughTraditional: IComboPizza[],
  doughThin: IComboPizza[],
}

export interface IDefaultIng {
  title: string,
  add: boolean,
}

export enum PizzaDataKeyNames {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  DOUGH_TRADITIONAL = 'doughTraditional',
  DOUGH_THIN = 'doughThin',
}

export enum PizzaDataKeyNamesPizzaSize {
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum PizzaDataKeyNamesDough {
  DOUGH_TRADITIONAL = 'doughTraditional',
  DOUGH_THIN = 'doughThin',
}
export interface IIngredients {
  title: string,
  url: string,
  price: number,
  id: number
}

export interface IMoreIng extends IIngredients {
  add: boolean,
}

export interface IPizzaParam {
  size: number,
  wight: number,
  url: string,
  price: number,
}

export interface IPizzaData {
  doughTraditional: {
    small: IPizzaParam,
    medium: IPizzaParam,
    large: IPizzaParam,
  },

  doughThin: {
    medium: IPizzaParam,
    large: IPizzaParam,
  }
}

export interface IProduct {
  title: string,
  url: string,
  description: string,
  price: number,
  route: string,
  moreIngredients: IIngredients[],
  pizzaDate: IPizzaData,
}

export interface IDefaultProduct {
  title: string,
  url: string,
  description: string,
  price: number,
  route: string,
}

export interface IComboProduct {
  title: string,
  url: string,
  description: string,
  price: number,
  route: string,
  parts: Array<IOneDoughTraditional | ITwoDough | IDefaultProduct[]>
}

export interface ICollection {
  collection: IProduct[] | IDefaultProduct[] | IComboProduct[],
  collectionName: string,
}

export interface IMenuState {
  menu: ICollection[],
  loading: boolean,
  error: null | string
}

export enum MenuActionTypes {
  FETCH_MENU = 'FETCH_MENU',
  FETCH_MENU_SUCCES = 'FETCH_MENU_SUCCES',
  FETCH_MENU_ERROR = 'FETCH_MENU_ERROR',
}
interface IFetchMenuAction {
  type: MenuActionTypes.FETCH_MENU,
}
interface IFetchMenuSuccesAction {
  type: MenuActionTypes.FETCH_MENU_SUCCES,
  payload: any[],
}
interface IFetchMenuErrorAction {
  type: MenuActionTypes.FETCH_MENU_ERROR,
  payload: string,
}

export type MenuAction = IFetchMenuAction | IFetchMenuSuccesAction | IFetchMenuErrorAction;

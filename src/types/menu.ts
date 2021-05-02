export interface IProduct {
  title: string,
  url: string,
  description: string,
  price: number,
}

export interface MenuState {
  menu: any[]
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

export interface IProductsSlider {
  title: string;
  url: string;
  price: string;
  route: string;
}

export interface IPopularState {
  popular: IProductsSlider[];
  loading: boolean;
  error: null | string;
}

export enum PopularActionTypes {
  FETCH_POPULAR = 'FETCH_POPULAR',
  FETCH_POPULAR_SUCCES = 'FETCH_POPULAR_SUCCES',
  FETCH_POPULAR_ERROR = 'FETCH_POPULAR_ERROR',
}

interface IPopularAction {
  type: PopularActionTypes.FETCH_POPULAR;
}

interface IFetchPopularSuccesAction {
  type: PopularActionTypes.FETCH_POPULAR_SUCCES;
  payload: IProductsSlider[];
}

interface IFetchPopularErrorAction {
  type: PopularActionTypes.FETCH_POPULAR_ERROR;
  payload: string;
}

export type PopularAction = IPopularAction | IFetchPopularSuccesAction | IFetchPopularErrorAction;

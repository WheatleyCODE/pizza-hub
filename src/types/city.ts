export interface ICity {
  name: string;
  time: number;
  star: number;
}
export interface ICurrentCity {
  name: string;
  time: number;
  star: number;
}
export interface ICityState {
  currentCity: ICurrentCity;
  city: ICity[];
  loading: boolean;
  error: null | string;
}

export enum CityActionTypes {
  FETCH_CITY = 'FETCH_CITY',
  FETCH_CITY_SUCCES = 'FETCH_CITY_SUCCES',
  FETCH_CITY_ERROR = 'FETCH_CITY_ERROR',
  SET_CURRENT_CITY = 'SET_CURRENT_CITY',
}

interface IFetchCityAction {
  type: CityActionTypes.FETCH_CITY;
}
interface IFetchCitySuccesAction {
  type: CityActionTypes.FETCH_CITY_SUCCES;
  payload: ICity[];
}
interface IFetchCityErrorAction {
  type: CityActionTypes.FETCH_CITY_ERROR;
  payload: string;
}

interface ISetCurrentCityAction {
  type: CityActionTypes.SET_CURRENT_CITY;
  payload: ICurrentCity;
}

export type CityAction =
  | IFetchCityErrorAction
  | IFetchCityAction
  | IFetchCitySuccesAction
  | ISetCurrentCityAction;

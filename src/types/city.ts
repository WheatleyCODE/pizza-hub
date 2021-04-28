export interface CityState {
  city: any[]
  loading: boolean,
  error: null | string,
}

export enum CityActionTypes {
  FETCH_CITY = 'FETCH_CITY',
  FETCH_CITY_SUCCES = 'FETCH_CITY_SUCCES',
  FETCH_CITY_ERROR = 'FETCH_CITY_ERROR',
}

interface FetchCityAction {
  type: CityActionTypes.FETCH_CITY,
}
interface FetchCitySuccesAction {
  type: CityActionTypes.FETCH_CITY_SUCCES,
  payload: any[],
}
interface FetchCityErrorAction {
  type: CityActionTypes.FETCH_CITY_ERROR,
  payload: string,
}

export type CityAction =
  FetchCityErrorAction
  | FetchCityAction
  | FetchCitySuccesAction;

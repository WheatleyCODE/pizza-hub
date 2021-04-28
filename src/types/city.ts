export interface CurrentCity {
  name: string,
  time: number,
}
export interface CityState {
  currentCity: CurrentCity,
  city: any[]
  loading: boolean,
  error: null | string,
}

export enum CityActionTypes {
  FETCH_CITY = 'FETCH_CITY',
  FETCH_CITY_SUCCES = 'FETCH_CITY_SUCCES',
  FETCH_CITY_ERROR = 'FETCH_CITY_ERROR',
  SET_CURRENT_CITY = 'SET_CURRENT_CITY',
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

interface SetCurrentCityAction {
  type: CityActionTypes.SET_CURRENT_CITY,
  payload: CurrentCity,
}

export type CityAction =
  FetchCityErrorAction
  | FetchCityAction
  | FetchCitySuccesAction
  | SetCurrentCityAction;

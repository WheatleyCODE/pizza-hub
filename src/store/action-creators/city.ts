import { Dispatch } from 'react';
import axios from '../../axios/axios-default';
import {
  CityAction,
  CityActionTypes,
  ICurrentCity,
  ICity,
} from '../../types/city';

const fetchCityStart = (): CityAction => ({ type: CityActionTypes.FETCH_CITY });

const fetchCitySucces = (data: ICity[]): CityAction => ({
  type: CityActionTypes.FETCH_CITY_SUCCES,
  payload: data,
});

const fetchCityError = (): CityAction => ({
  type: CityActionTypes.FETCH_CITY_ERROR,
  payload: 'Error City',
});

export const fetchCity = () => async (dispatch: Dispatch<CityAction>) => {
  try {
    dispatch(fetchCityStart());

    const response = await axios.get('/cities.json');
    const keys = Object.keys(response.data);
    const data: ICity[][] = keys.map((key) => response.data[key]);

    dispatch(fetchCitySucces(data[0]));
  } catch (e) {
    dispatch(fetchCityError());
  }
};

export const setCurrentCity = (currentCity: ICurrentCity): CityAction => ({
  type: CityActionTypes.SET_CURRENT_CITY,
  payload: currentCity,
});

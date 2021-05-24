import { Dispatch } from 'react';
import axios from '../../utils/axios/axios-default';
import {
  CityAction,
  CityActionTypes,
  ICurrentCity,
  ICity,
} from '../../types/city';
import { reduce } from '../../utils/reduce';

export const fetchCity = () => async (dispatch: Dispatch<CityAction>) => {
  try {
    dispatch(reduce(CityActionTypes.FETCH_CITY));

    const response = await axios.get('/cities.json');
    const keys = Object.keys(response.data);
    const data: ICity[][] = keys.map((key) => response.data[key]);

    dispatch(reduce(CityActionTypes.FETCH_CITY_SUCCES, data[0]));
  } catch (e) {
    dispatch(reduce(CityActionTypes.FETCH_CITY_ERROR, 'Error City'));
  }
};

export const setCurrentCity = (currentCity: ICurrentCity): CityAction => ({
  type: CityActionTypes.SET_CURRENT_CITY,
  payload: currentCity,
});

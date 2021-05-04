import axios from 'axios';
import { Dispatch } from 'react';
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

    const response = await axios.get('https://qb-pizza-hub-default-rtdb.firebaseio.com/cities.json');
    let data: ICity[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in response.data) {
      if (Object.prototype.hasOwnProperty.call(response.data, key)) {
        data = response.data[key];
      }
    }

    dispatch(fetchCitySucces(data));
  } catch (e) {
    dispatch(fetchCityError());
  }
};

export const setCurrentCity = (currentCity: ICurrentCity): CityAction => ({
  type: CityActionTypes.SET_CURRENT_CITY,
  payload: currentCity,
});

import axios from 'axios';
import { Dispatch } from 'react';
import { CityAction, CityActionTypes } from '../../types/city';

const fetchCity = () => async (dispatch: Dispatch<CityAction>) => {
  try {
    dispatch({ type: CityActionTypes.FETCH_CITY });

    const response = await axios.get('https://qb-pizza-hub-default-rtdb.firebaseio.com/cities.json');
    let data: any[];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in response.data) {
      if (Object.prototype.hasOwnProperty.call(response.data, key)) {
        data = response.data[key];
      }
    }

    setTimeout(() => {
      dispatch({
        type: CityActionTypes.FETCH_CITY_SUCCES,
        payload: data,
      });
    }, 500);
  } catch (e) {
    dispatch({
      type: CityActionTypes.FETCH_CITY_ERROR,
      payload: 'Error City',
    });
  }
};

export default fetchCity;

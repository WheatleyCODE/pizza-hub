import axios from 'axios';
import { Dispatch } from 'react';
import { CityAction, CityActionTypes } from '../../types/city';

const fetchCity = () => async (dispatch: Dispatch<CityAction>) => {
  try {
    dispatch({ type: CityActionTypes.FETCH_CITY });

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: { _page: 1, _limit: 10 },
    });

    setTimeout(() => {
      dispatch({
        type: CityActionTypes.FETCH_CITY_SUCCES,
        payload: response.data,
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

import axios from 'axios';
import { Dispatch } from 'react';
import { CityAction, CityActionTypes } from '../../types/city';

// eslint-disable-next-line import/prefer-default-export
export const fetchCity = () => {
  console.log('object');
  return async (dispatch: Dispatch<CityAction>) => {
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
        payload: 'Произошла ошибка при загрузке списка дел',
      });
    }
  };
};

// export const setTodoPage = (page: number): TodoAction => {
//   return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
// };

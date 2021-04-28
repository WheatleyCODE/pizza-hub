import axios from 'axios';
import { Dispatch } from 'react';
import { MenuAction, MenuActionTypes } from '../../types/menu';

const fetchMenu = () => async (dispatch: Dispatch<MenuAction>) => {
  try {
    dispatch({ type: MenuActionTypes.FETCH_MENU });

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    setTimeout(() => {
      dispatch({
        type: MenuActionTypes.FETCH_MENU_SUCCES,
        payload: response.data,
      });
    }, 500);
  } catch (e) {
    dispatch({
      type: MenuActionTypes.FETCH_MENU_ERROR,
      payload: 'Error menu',
    });
  }
};

export default fetchMenu;

import axios from 'axios';
import { Dispatch } from 'react';
import { MenuAction, MenuActionTypes } from '../../types/menu';

const fetchMenuStart = (): MenuAction => ({ type: MenuActionTypes.FETCH_MENU });
const fetchMenuSucces = (data: any): MenuAction => ({
  type: MenuActionTypes.FETCH_MENU_SUCCES,
  payload: data,
});

const fetchMenuError = (): MenuAction => ({
  type: MenuActionTypes.FETCH_MENU_ERROR,
  payload: 'Error menu',
});

const fetchMenu = () => async (dispatch: Dispatch<MenuAction>) => {
  try {
    dispatch(fetchMenuStart());

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch(fetchMenuSucces(response.data));
  } catch (e) {
    dispatch(fetchMenuError());
  }
};

export default fetchMenu;

import { Dispatch } from 'react';
import axios from '../../axios/axios-default';
import { MenuAction, MenuActionTypes, ICollection } from '../../types/menu';

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

    const response = await axios.get('/yestest.json');
    const keys = Object.keys(response.data);
    const data: ICollection[][] = keys.map((key) => response.data[key]);

    dispatch(fetchMenuSucces(data[0]));
  } catch (e) {
    dispatch(fetchMenuError());
  }
};

export default fetchMenu;

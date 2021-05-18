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
    let data: ICollection[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in response.data) {
      if (Object.prototype.hasOwnProperty.call(response.data, key)) {
        data = response.data[key];
      }
    }

    dispatch(fetchMenuSucces(data));
  } catch (e) {
    dispatch(fetchMenuError());
  }
};

export default fetchMenu;

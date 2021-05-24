import { Dispatch } from 'react';
import { reduce, axios } from '@utils';
import { MenuAction, MenuActionTypes, ICollection } from '@t/menu';

const fetchMenu = () => async (dispatch: Dispatch<MenuAction>) => {
  try {
    dispatch(reduce(MenuActionTypes.FETCH_MENU));

    const response = await axios.get('/yestest.json');
    const keys = Object.keys(response.data);
    const data: ICollection[][] = keys.map((key) => response.data[key]);

    dispatch(reduce(MenuActionTypes.FETCH_MENU_SUCCES, data[0]));
  } catch (e) {
    dispatch(reduce(MenuActionTypes.FETCH_MENU_ERROR, 'Error menu'));
  }
};

export default fetchMenu;

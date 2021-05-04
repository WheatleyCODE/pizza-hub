import { MenuAction, MenuActionTypes, IMenuState } from '../../types/menu';

const initialState: IMenuState = {
  menu: [],
  loading: false,
  error: null,
};

const menuReducer = (state = initialState, action: MenuAction): IMenuState => {
  switch (action.type) {
    case MenuActionTypes.FETCH_MENU:
      return { loading: true, error: null, menu: [] };

    case MenuActionTypes.FETCH_MENU_SUCCES:
      return { loading: false, error: null, menu: action.payload };

    case MenuActionTypes.FETCH_MENU_ERROR:
      return { loading: false, error: action.payload, menu: [] };

    default:
      return state;
  }
};

export default menuReducer;

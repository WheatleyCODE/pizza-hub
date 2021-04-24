import { MenuAction, MenuActionTypes, MenuState } from '../../types/menu';

const initialState: MenuState = {
  menu: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (state = initialState, action: MenuAction): MenuState => {
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

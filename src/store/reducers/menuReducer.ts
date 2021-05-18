import { MenuAction, MenuActionTypes, IMenuState } from '../../types/menu';

const initialState: IMenuState = {
  menu: [],
  loading: false,
  error: null,
};

const menuReducer = (state = initialState, action: MenuAction): IMenuState => {
  switch (action.type) {
    case MenuActionTypes.FETCH_MENU:
      return {
        ...state,
        loading: true,
      };

    case MenuActionTypes.FETCH_MENU_SUCCES:
      return {
        ...state,
        loading: false,
        menu: action.payload,
      };

    case MenuActionTypes.FETCH_MENU_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default menuReducer;

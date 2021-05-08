import { AuthAction, AuthActionTypes, IAuthState } from '../../types/auth';

const initialState: IAuthState = {
  email: '',
  token: '',
  userId: '',
  error: null,
};

const authReducer = (state: IAuthState = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_SUCCES:
      return {
        ...state,
        ...action.payload,
      };
    case AuthActionTypes.AUTH_LOGOUT:
      return {
        ...initialState,
      };
    case AuthActionTypes.SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;

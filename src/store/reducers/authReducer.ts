import { AuthAction, AuthActionTypes, IAuthState } from '../../types/auth';

const initialState: IAuthState = {
  email: '',
  token: '',
  userId: '',
};

const authReducer = (state: IAuthState = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_SUCCES:
      return { ...state, ...action.payload };
    case AuthActionTypes.AUTH_LOGOUT:
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default authReducer;

import { AuthAction, AuthActionTypes, AuthState } from '../../types/auth';

const initialState: AuthState = {
  email: '',
  token: '',
  userId: '',
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
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

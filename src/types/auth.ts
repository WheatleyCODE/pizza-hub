export interface AuthData {
  email: string,
  password: string,
  isLogin: boolean,
}

export interface AuthState {
  email: string,
  token: string,
  userId: string,
}

export enum AuthActionTypes {
  AUTH_SUCCES = 'AUTH_SUCCES',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

interface AuthSuccesActionCreator {
  type: AuthActionTypes.AUTH_SUCCES,
  payload: AuthState,
}

interface AuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT,
}

export type AuthAction = AuthSuccesActionCreator | AuthLogoutAction;

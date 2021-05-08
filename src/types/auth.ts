export interface IAuthData {
  email: string,
  password: string,
  isLogin: boolean,
}

export interface IAuthState {
  email: string,
  token: string,
  userId: string,
  error: null | string,
}

export enum AuthActionTypes {
  AUTH_SUCCES = 'AUTH_SUCCES',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  SET_AUTH_ERROR = 'SET_AUTH_ERROR',
}

interface IAuthSuccesActionCreator {
  type: AuthActionTypes.AUTH_SUCCES,
  payload: IAuthState,
}

interface IAuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT,
}

interface ISetAuthErrorAction {
  type: AuthActionTypes.SET_AUTH_ERROR,
  payload: string | null,
}

export type AuthAction = IAuthSuccesActionCreator | IAuthLogoutAction | ISetAuthErrorAction;

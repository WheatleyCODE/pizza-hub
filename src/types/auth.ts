export interface IAuthData {
  email: string,
  password: string,
  isLogin: boolean,
}

export interface IAuthState {
  email: string,
  token: string,
  userId: string,
}

export enum AuthActionTypes {
  AUTH_SUCCES = 'AUTH_SUCCES',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

interface IAuthSuccesActionCreator {
  type: AuthActionTypes.AUTH_SUCCES,
  payload: IAuthState,
}

interface IAuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT,
}

export type AuthAction = IAuthSuccesActionCreator | IAuthLogoutAction;

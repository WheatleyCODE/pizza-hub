import axios from 'axios';
import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes, IAuthData } from '@t/auth';

const authSucces = (email: string, token: string, userId: string): AuthAction => ({
  type: AuthActionTypes.AUTH_SUCCES,
  payload: {
    email,
    token,
    userId,
    error: null,
  },
});

export const logout = (): AuthAction => {
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');

  return { type: AuthActionTypes.AUTH_LOGOUT };
};

export const setAuthError = (text: string | null): AuthAction => ({
  type: AuthActionTypes.SET_AUTH_ERROR,
  payload: text,
});

const autologout = (time: number, dispatch: Dispatch<AuthAction>) => {
  setTimeout(() => {
    dispatch(logout());
  }, time * 1000);
};

export const autoLogin = () => async (dispatch: Dispatch<AuthAction>) => {
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const expirationDate = localStorage.getItem('expirationDate');

  if (!token || !userId || !expirationDate || !email) {
    dispatch(logout());
  } else if (expirationDate && new Date(JSON.parse(expirationDate)) <= new Date()) {
    dispatch(logout());
  } else {
    const expDate = new Date(JSON.parse(expirationDate));
    dispatch(authSucces(email, token, userId));
    autologout((expDate.getTime() - new Date().getTime()) / 1000, dispatch);
  }
};

export const auth =
  (authData: IAuthData, succesCallback: () => void) => async (dispatch: Dispatch<AuthAction>) => {
    try {
      let url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCybwd8_sQFZF95r1i7mLeZc-F8LkDR7mQ';
      if (authData.isLogin) {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCybwd8_sQFZF95r1i7mLeZc-F8LkDR7mQ';
      }
      const response = await axios.post(url, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      });
      const { data } = response;

      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

      localStorage.setItem('email', authData.email);
      localStorage.setItem('token', data.idToken);
      localStorage.setItem('userId', data.localId);
      localStorage.setItem('expirationDate', JSON.stringify(expirationDate));

      dispatch(authSucces(authData.email, data.idToken, data.localId));
      autologout(data.expiresIn, dispatch);
      succesCallback();
    } catch (e) {
      dispatch(setAuthError('Неверный Email или Password'));
    }
  };

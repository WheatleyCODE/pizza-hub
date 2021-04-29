import axios from 'axios';
import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes, AuthData } from '../../types/auth';

const authSucces = (email: string, token: string, userId: string): AuthAction => ({
  type: AuthActionTypes.AUTH_SUCCES,
  payload: {
    email,
    token,
    userId,
  },
});

export const logout = (): AuthAction => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');

  return ({ type: AuthActionTypes.AUTH_LOGOUT });
};

const autologout = (time: number, dispatch:Dispatch<AuthAction>) => {
  setTimeout(() => {
    dispatch(logout());
  }, time * 1000);
};

export const auth = (authData: AuthData, succesCallback: () => void) => (
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      let url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCybwd8_sQFZF95r1i7mLeZc-F8LkDR7mQ';
      if (authData.isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCybwd8_sQFZF95r1i7mLeZc-F8LkDR7mQ';
      }
      const response = await axios.post(url, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      });
      const { data } = response;

      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

      localStorage.setItem('token', data.idToken);
      localStorage.setItem('userId', data.localId);
      localStorage.setItem('expirationDate', expirationDate.toString());

      console.log(data);
      dispatch(authSucces(authData.email, data.idToken, data.localId));
      autologout(data.expiresIn, dispatch);
      succesCallback();
    } catch (e) {
      console.log(e);
    }
  });

import axios from 'axios';
import React from 'react';
import useInput from '../../hooks/useInput';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Auth.scss';

const Auth = () => {
  const inputLogin = useInput('', 'Email', 'email');
  const inputPassword = useInput('', 'Password', 'password');
  const valid = (!inputLogin.isValid || !inputPassword.isValid);

  const loginHandler = async () => {
    try {
      const authData = {
        email: inputLogin.default.value,
        password: inputPassword.default.value,
        returnSecureToken: true,
      };
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCybwd8_sQFZF95r1i7mLeZc-F8LkDR7mQ', authData);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const registerHandler = async () => {
    try {
      const authData = {
        email: inputLogin.default.value,
        password: inputPassword.default.value,
        returnSecureToken: true,
      };
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCybwd8_sQFZF95r1i7mLeZc-F8LkDR7mQ', authData);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="logInText">Вход на сайт</h1>
      <Input
        isError={inputLogin.isError}
        validError={inputLogin.validError}
        icon="fa fa-envelope"
        defaultParams={inputLogin.default}
      />
      <Input
        isError={inputPassword.isError}
        validError={inputPassword.validError}
        icon="fa fa-unlock-alt"
        defaultParams={inputPassword.default}
      />
      <div className="buttonContainer">
        <div className="loginButton">
          { valid
            ? <Button buttonStyle="default" onClickHandler={() => {}} text="Войти" />
            : <Button buttonStyle="bright" onClickHandler={loginHandler} text="Войти" /> }
        </div>
        <div className="registerButton">
          { valid
            ? <Button buttonStyle="default" onClickHandler={() => {}} text="Регистрация" />
            : <Button buttonStyle="bright" onClickHandler={registerHandler} text="Регистрация" /> }
        </div>
      </div>
    </div>
  );
};

export default Auth;

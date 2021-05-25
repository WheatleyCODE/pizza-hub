import React, { useEffect } from 'react';
import { useActions, useInput, useTypedSelector } from '@hooks';
import Button from '@ui/Button';
import Input from '@ui/Input';
import './Auth.scss';

interface IAuthProps {
  toggleLoginModal: () => void;
}

const Auth: React.FC<IAuthProps> = ({ toggleLoginModal }) => {
  const inputLogin = useInput('', 'Email', 'email');
  const inputPassword = useInput('', 'Password', 'password');
  const valid = !inputLogin.isValid || !inputPassword.isValid;

  const { auth, setAuthError } = useActions();
  const { error } = useTypedSelector((state) => state.auth);

  const authHandler = (isLogin: boolean) => {
    const authData = {
      email: inputLogin.default.value,
      password: inputPassword.default.value,
      isLogin,
    };
    auth(authData, toggleLoginModal);
  };

  useEffect(() => {
    if (error) setAuthError(null);
  }, [inputLogin.default.value, inputPassword.default.value]);

  return (
    <div className="Auth">
      <h1 className="Auth__logInText">Вход на сайт</h1>
      {error && <h4 className="error-message">{error}</h4>}
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
      <div className="Auth__buttonContainer">
        <div className="loginButton">
          {valid ? (
            <Button buttonStyle="default" text="Войти" />
          ) : (
            <Button buttonStyle="bright" onClickHandler={() => authHandler(true)} text="Войти" />
          )}
        </div>
        <div className="registerButton">
          {valid ? (
            <Button buttonStyle="default" text="Регистрация" />
          ) : (
            <Button
              buttonStyle="bright"
              onClickHandler={() => authHandler(false)}
              text="Регистрация"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

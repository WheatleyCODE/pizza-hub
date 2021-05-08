import React, { useEffect } from 'react';
import useActions from '../../hooks/useAction';
import useInput from '../../hooks/useInput';
import useTypedSelector from '../../hooks/useTypedSelector';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Auth.scss';

interface IAuthProps {
  toggleLoginModal: () => void;
}

const Auth = ({ toggleLoginModal }: IAuthProps) => {
  const inputLogin = useInput('', 'Email', 'email');
  const inputPassword = useInput('', 'Password', 'password');
  const valid = (!inputLogin.isValid || !inputPassword.isValid);

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
      { error ? <h4 className="error-message">{error}</h4> : null}
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
          { valid
            ? <Button buttonStyle="default" onClickHandler={() => {}} text="Войти" />
            : <Button buttonStyle="bright" onClickHandler={() => authHandler(true)} text="Войти" /> }
        </div>
        <div className="registerButton">
          { valid
            ? <Button buttonStyle="default" onClickHandler={() => {}} text="Регистрация" />
            : <Button buttonStyle="bright" onClickHandler={() => authHandler(false)} text="Регистрация" /> }
        </div>
      </div>
    </div>
  );
};

export default Auth;

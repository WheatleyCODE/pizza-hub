import React, { useEffect, useState } from 'react';

const useInput = (initialValue: string, placeholder: string, type: string) => {
  const [value, setValue] = useState(initialValue);
  const [validError, setValidError] = useState('Поле не может быть пустым');
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onBlur = () => {
    setTouched(true);
  };
  useEffect(() => {
    if (validError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [validError]);

  let onChange;

  switch (type) {
    case 'email':
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.value.length < 1) {
          setValidError('Поле не может быть пустым');
        } else if (!re.test(String(e.target.value).toLowerCase())) {
          setValidError('Некорректный Email');
        } else {
          setValidError('');
        }
      };
      break;
    case 'password':
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (e.target.value.length < 1) {
          setValidError('Поле не может быть пустым');
        } else if (e.target.value.length < 5) {
          setValidError('Password должен быть длинее 5 символов');
        } else {
          setValidError('');
        }
      };
      break;

    case 'promo':
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (e.target.value.length < 1) {
          setValidError('Поле не может быть пустым');
        } else if (e.target.value.length < 8) {
          setValidError('Промокод должен содержать 8 символов');
        } else {
          setValidError('');
        }
      };
      break;

    default:
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };
      break;
  }

  return {
    default: {
      value,
      onChange,
      placeholder,
      type,
      onBlur,
    },
    validError,
    isError: !!(touched && validError),
    isValid,
  };
};

export default useInput;

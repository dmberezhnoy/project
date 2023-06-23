import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/ui/Text';

import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../../model/selectors';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface ILoginFormProps {
    className?: string;
    onSuccessLogin: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = React.memo(({ className, onSuccessLogin }: ILoginFormProps) => {
  const { t } = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const dispatch = useAppDispatch();

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLoginClick = useCallback(async () => {
    const response = await dispatch(loginByUsername({ username, password }));
    if (response.meta.requestStatus === 'fulfilled') {
      onSuccessLogin();
    }
  }, [dispatch, password, username, onSuccessLogin]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div
        className={classNames(cls.LoginForm, {}, [className])}
      >
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
        <Input
          autoFocus
          value={username}
          onChange={handleChangeUsername}
          placeholder={t('Введите имя')}
        />
        <Input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder={t('Введите пароль')}
        />
        <Button
          onClick={handleLoginClick}
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;

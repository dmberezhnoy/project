import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      className={classNames(cls.LoginForm, {}, [className])}
    >
      <Input
        autoFocus
        value={login}
        onChange={setLogin}
        placeholder={t('Введите имя')}
      />
      <Input
        type="password"
        value={password}
        onChange={setPassword}
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};

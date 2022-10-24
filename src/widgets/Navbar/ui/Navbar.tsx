import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = React.memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleOpenLoginForm = useCallback(() => setIsOpenLoginForm(true), []);
  const handleCloseLoginForm = useCallback(() => setIsOpenLoginForm(false), []);
  const handleLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          onClick={handleLogout}
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.actions}
        >
          {t('Выйти')}
        </Button>
        <LoginModal isOpen={isOpenLoginForm} onClose={handleCloseLoginForm} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={handleOpenLoginForm}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.actions}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isOpenLoginForm} onClose={handleCloseLoginForm} />
    </div>
  );
});

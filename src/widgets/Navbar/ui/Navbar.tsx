import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';

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
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text title={t('Учебный проект')} theme={TextTheme.INVERTED} className={cls.appName} />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.PRIMARY}
          className={cls.createArticle}
        >
          {t('Создание статьи')}
        </AppLink>
        <Button
          onClick={handleLogout}
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.actions}
        >
          {t('Выйти')}
        </Button>
        <LoginModal isOpen={isOpenLoginForm} onClose={handleCloseLoginForm} />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={handleOpenLoginForm}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.actions}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isOpenLoginForm} onClose={handleCloseLoginForm} />
    </header>
  );
});

import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation('main');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Основная страница')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};

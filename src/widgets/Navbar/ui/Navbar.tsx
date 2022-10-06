import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppRoutes, RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation('main');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        /
      </div>
    </div>
  );
};

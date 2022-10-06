import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';
import { AppRoutes, RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

const pageLinks = [
  {
    link: RoutePath[AppRoutes.MAIN],
    icon: <MainPageIcon className={cls.icon} />,
    pageName: 'Основная страница',
  },
  {
    link: RoutePath[AppRoutes.ABOUT],
    icon: <AboutPageIcon className={cls.icon} />,
    pageName: 'О сайте',
  },
];

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const renderLinks = () => pageLinks.map((page) => (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={page.link}
      key={page.link}
    >
      <div className={cls.linkItem}>
        {page.icon}
        {!isCollapsed && t(page.pageName)}
      </div>
    </AppLink>
  ));

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <Button
        square
        data-testid="sidebar-toggle"
        onClick={handleCollapse}
        className={cls.collapseBtn}
        theme={ButtonTheme.FILLED_INVERTED}
        size={ButtonSize.XL}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.linksWrapper}>
        {renderLinks()}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

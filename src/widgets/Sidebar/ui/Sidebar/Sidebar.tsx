import React, { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <button type="button" onClick={handleCollapse}>{t('Переключить')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = React.memo(({ className }: ISidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <menu data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
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
        {sidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} isCollapsed={isCollapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </menu>
  );
});

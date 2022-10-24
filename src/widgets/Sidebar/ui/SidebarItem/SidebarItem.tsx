import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { ISidebarItem } from '../../model/sidebarItems';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps {
    item: ISidebarItem;
    isCollapsed: boolean;
}

export const SidebarItem = React.memo(({ item, isCollapsed }: ISidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={item.path}
    >
      <div className={cls.item}>
        <item.Icon className={cls.icon} />
        {!isCollapsed && t(item.text)}
      </div>
    </AppLink>
  );
});

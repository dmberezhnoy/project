import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import { ISidebarItem } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps {
    item: ISidebarItem;
    isCollapsed: boolean;
}

export const SidebarItem = React.memo(({ item, isCollapsed }: ISidebarItemProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  if (item.authOnly && !authData) {
    return null;
  }

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

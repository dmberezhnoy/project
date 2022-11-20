import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from 'entities/User';
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import ArticlesPageIcon from 'shared/assets/icons/articles-page-icon.svg';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page-icon.svg';
import { RoutePath } from 'shared/config/routerConfig';

import { ISidebarItem } from '../../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: ISidebarItem[] = [
      {
        path: RoutePath.main,
        Icon: MainPageIcon,
        text: 'Основная страница',
      },
      {
        path: RoutePath.about,
        Icon: AboutPageIcon,
        text: 'О сайте',
      },
    ];
    if (userData) {
      sidebarItemList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfilePageIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesPageIcon,
          text: 'Статьи',
          authOnly: true,
        },
      );
    }

    return sidebarItemList;
  },
);

import React from 'react';

import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import ArticlesPageIcon from 'shared/assets/icons/articles-page-icon.svg';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page-icon.svg';
import { RoutePath } from 'shared/config/routerConfig';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: ISidebarItem[] = [
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
  {
    path: RoutePath.profile,
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
];

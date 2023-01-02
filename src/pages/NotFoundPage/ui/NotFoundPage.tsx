import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

import cls from './NotFoundPage.module.scss';

interface INotFoundProps {
    className?: string;
}

export const NotFoundPage: React.FC<INotFoundProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</Page>
  );
};

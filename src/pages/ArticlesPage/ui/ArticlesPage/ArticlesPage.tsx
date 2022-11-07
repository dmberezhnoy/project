import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticlesPage, {}, [])}>{t('ARTICLES PAGE')}</div>
  );
};

export default ArticlesPage;

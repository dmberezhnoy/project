import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [])}>{t('ARTICLE DETAILS')}</div>
  );
};

export default ArticleDetailsPage;

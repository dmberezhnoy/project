import React from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticlesPage, {}, [])}>
      <ArticleList articles={[]} />
    </div>
  );
};

export default ArticlesPage;

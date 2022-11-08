import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article');
  const { id } = useParams();

  return (
    <div
      className={classNames(cls.ArticleDetailsPage, {}, [])}
    >
      {id ? <ArticleDetails id={id} /> : t('Статья не найдена')}
    </div>
  );
};

export default ArticleDetailsPage;

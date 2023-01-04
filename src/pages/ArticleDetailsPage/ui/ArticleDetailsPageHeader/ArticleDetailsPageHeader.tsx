import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'features/ArticleDetailsComments';
import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ArticleDetailsPageHeader.module.scss';

interface IArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = React.memo((props: IArticleDetailsPageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const canEditArticle = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const handleEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>{t('Назад к списку')}</Button>
      {canEditArticle && <Button theme={ButtonTheme.OUTLINE} onClick={handleEditArticle}>{t('Редактировать')}</Button>}
    </div>
  );
});

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticleList } from 'entities/Article';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';

import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors';
import { initArticlesPage } from '../../model/services';
import { getArticles } from '../../model/slices/articlePageSlice';

interface IArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = React.memo((props: IArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <Text theme={TextTheme.ERROR} text={t('Ошибка при загрузке статей')} />;
  }

  return (
    <ArticleList articles={articles} isLoading={isLoading} view={view} />
  );
});

import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Page } from 'widgets/Page';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors';
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services';
import { articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

const reducers: ReducerList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={classNames(cls.ArticlesPage, {}, [])} onScrollEnd={handleLoadNextPart}>
        <ArticlesPageFilters />
        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;

import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';

import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors';
import { fetchArticles } from '../../model/services';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';

const reducers: ReducerList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(fetchArticles());
    dispatch(articlePageActions.initState());
  });

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [])}>
        <ArticleViewSelector view={view} onChangeView={handleChangeView} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;

import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeSelector,
  ArticleView,
  ArticleViewSelector,
} from '@/entities/Article';
import { ArticleTypes } from '@/entities/Article/model/types';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors';
import { fetchArticles } from '../../model/services';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface IArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = React.memo((props: IArticlesPageFiltersProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const articlesType = useSelector(getArticlesPageType);

  const { t } = useTranslation();

  const fetchArticlesData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchArticlesData = useDebounce(fetchArticlesData, 500);

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  const handleChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort));
    dispatch(articlePageActions.setPage(1));
    fetchArticlesData();
  }, [dispatch, fetchArticlesData]);

  const handleChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder));
    dispatch(articlePageActions.setPage(1));
    fetchArticlesData();
  }, [dispatch, fetchArticlesData]);

  const handleChangeSearch = useCallback((search: string) => {
    dispatch(articlePageActions.setSearch(search));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchArticlesData();
  }, [dispatch, debouncedFetchArticlesData]);

  const handleChangeType = useCallback((type: ArticleTypes) => {
    dispatch(articlePageActions.setType(type));
    dispatch(articlePageActions.setPage(1));
    fetchArticlesData();
  }, [dispatch, fetchArticlesData]);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={handleChangeSort}
          onChangeOrder={handleChangeOrder}
        />
        <ArticleViewSelector view={view} onChangeView={handleChangeView} />
      </div>
      <Card>
        <Input placeholder={t('Поиск')} value={search} onChange={handleChangeSearch} />
      </Card>
      <ArticleTypeSelector value={articlesType} onChangeArticleType={handleChangeType} />
    </div>
  );
});

import React from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleView, IArticle } from '../../model/types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
  .fill(1)
  .map((item, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = React.memo((props: IArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.LIST,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticles = (article: IArticle) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticles) : null}
    </div>
  );
});

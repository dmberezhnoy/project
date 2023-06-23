import React, { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/ui/Text';

import { ArticleView, IArticle } from '../../model/types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
  .fill(1)
  .map((item, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = React.memo((props: IArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.LIST,
  } = props;
  const { t } = useTranslation();

  const renderArticles = (article: IArticle) => (
    <ArticleListItem
      article={article}
      view={view}
      target={target}
      key={article.id}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('Статьи не найдены')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticles) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});

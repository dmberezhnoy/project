import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

import { ArticleView } from '../../model/types';
import cls from './ArticleListItem.module.scss';

interface IArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = React.memo((props: IArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={130} height={16} />
            <Skeleton width={80} height={16} className={cls.createdAt} />
          </div>
          <Skeleton width={240} height={24} />
          <Skeleton height={200} className={cls.image} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
            <Skeleton width={230} height={16} className={cls.views} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={230} height={230} className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={230} height={16} />
      </Card>
    </div>
  );
});

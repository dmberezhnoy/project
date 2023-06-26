import React, { Suspense } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import { IArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = React.lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: IArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={125} />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);

import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';

export interface IArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = React.memo((props: IArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const userAuthData = useSelector(getUserAuthData);
  const [rateArticle] = useRateArticleMutation();
  const { articleRating, isLoading } = useGetArticleRatingQuery(
    { articleId, userId: userAuthData?.id ?? '' },
    {
      selectFromResult: ({ data, isLoading }) => ({
        articleRating: data?.[0],
        isLoading,
      }),
    },
  );

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    if (!userAuthData?.id) return;

    rateArticle({
      rate: starsCount,
      articleId,
      userId: userAuthData.id,
      feedback,
    });
  }, [articleId, rateArticle, userAuthData]);

  const handleAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  const handleCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  if (isLoading) { return <Skeleton width="100%" height={125} />; }

  return (
    <RatingCard
      className={className}
      onAccept={handleAccept}
      onCancel={handleCancel}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв о статье. Это поможет улучшить качество')}
      rate={articleRating?.rate}
      hasFeedback
    />
  );
});

export default ArticleRating;

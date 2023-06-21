import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';

import { useGetArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles = [] } = useGetArticleRecommendationsList(3);

  return (
    <VStack className={classNames('', {}, [className])} gap="8">
      <Text size={TextSize.L} title={t('Рекомендуем')} />
      <ArticleList
        articles={articles}
        view={ArticleView.PLATE}
        isLoading={isLoading}
        target="_blank"
      />
    </VStack>
  );
});

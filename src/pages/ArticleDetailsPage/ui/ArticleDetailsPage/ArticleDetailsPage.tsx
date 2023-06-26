import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { articleDetailsPageReducer } from '@/features/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article');
  const { id } = useParams();

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [])}
      >
        <VStack gap="32" maxWidth>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleRating articleId={id} />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;

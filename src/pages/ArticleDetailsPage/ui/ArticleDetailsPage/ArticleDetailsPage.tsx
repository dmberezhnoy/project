import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import {
  addCommentForArticle,
  articleDetailsPageReducer,
  fetchArticleRecommendations,
  fetchCommentsByArticleId,
  getArticleComments,
  getArticleDetailsCommentsIsLoading,
  getArticleRecommendations,
  getArticleRecommendationsIsLoading,
} from 'features/ArticleDetailsComments';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { Page } from 'widgets/Page';

import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article');
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const handleSendComment = useCallback((comment: string) => {
    dispatch(addCommentForArticle(comment));
  }, [dispatch]);

  if (!id) {
    return (
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [])}
      >
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [])}
      >
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text size={TextSize.L} title={t('Рекомендуем')} className={cls.commentsTitle} />
        <ArticleList
          className={cls.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          view={ArticleView.PLATE}
          target="_blank"
        />
        <Text size={TextSize.L} title={t('Комментарии')} className={cls.commentsTitle} />
        <AddCommentForm className={cls.commentForm} onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;

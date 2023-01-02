import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import {
  addCommentForArticle,
  articleDetailsCommentsReducer,
  fetchCommentsByArticleId,
  getArticleComments,
  getArticleDetailsCommentsIsLoading,
} from 'features/ArticleDetailsComments';
import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article');
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const handleSendComment = useCallback((comment: string) => {
    dispatch(addCommentForArticle(comment));
  }, [dispatch]);
  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

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
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>{t('Назад к списку')}</Button>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={cls.commentsTitle} />
        <AddCommentForm className={cls.commentForm} onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;

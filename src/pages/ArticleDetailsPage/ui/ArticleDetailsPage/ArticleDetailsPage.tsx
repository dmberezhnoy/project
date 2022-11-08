import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
  getArticleDetailsCommentsIsLoading,
} from 'features/ArticleDetailsComments';
import { fetchCommentsByArticleId } from 'features/ArticleDetailsComments/model/services/fetchCommentsByArticleId';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Text } from 'shared/ui/Text';

import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article');
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div
        className={classNames(cls.ArticleDetailsPage, {}, [])}
      >
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(cls.ArticleDetailsPage, {}, [])}
      >
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={cls.commentsTitle} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;

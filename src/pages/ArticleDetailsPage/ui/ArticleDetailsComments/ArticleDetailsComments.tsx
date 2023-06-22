import React, { Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import {
  addCommentForArticle,
  fetchCommentsByArticleId,
  getArticleComments,
  getArticleDetailsCommentsIsLoading,
} from 'features/ArticleDetailsComments';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Loader } from 'shared/ui/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';

interface IArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = React.memo((props: IArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const handleSendComment = useCallback((comment: string) => {
    dispatch(addCommentForArticle(comment));
  }, [dispatch]);

  return (
    <VStack className={classNames('', {}, [className])} gap="8" maxWidth align="start">
      <Text size={TextSize.L} title={t('Комментарии')} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={handleSendComment} />
      </Suspense>
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </VStack>
  );
});

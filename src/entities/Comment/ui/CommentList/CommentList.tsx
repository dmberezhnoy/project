import React from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = React.memo((props: ICommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack className={className} gap="16" maxWidth>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack className={className} gap="16" maxWidth>
      {comments?.length
        ? comments
          .map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </VStack>
  );
});

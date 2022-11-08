import React from 'react';
import { useTranslation } from 'react-i18next';

import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';

import { IComment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = React.memo((props: ICommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});

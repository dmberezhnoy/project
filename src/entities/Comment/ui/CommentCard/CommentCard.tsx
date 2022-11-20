import React from 'react';

import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';

import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = React.memo((props: ICommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={40} />
      </div>
    );
  }

  if (!comment) return null;

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <div className={cls.header}>
          {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
          <Text title={comment.user.username} />
        </div>
      </AppLink>
      <Text text={comment.createdDate} size={TextSize.S} />
      <Text text={comment.text} />
    </div>
  );
});

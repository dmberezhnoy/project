import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { VStack } from 'shared/ui/Stack';

import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface INotificationListProps {
    className?: string;
}

export const NotificationList = React.memo((props: INotificationListProps) => {
  const { className } = props;
  const { data: notifications = [], isLoading } = useGetNotificationsQuery(
    null,
    { pollingInterval: 10000 },
  );

  if (isLoading) {
    return (
      <VStack gap="16" className={classNames(cls.NotificationList, {}, [className])}>
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack gap="16" className={classNames(cls.NotificationList, {}, [className])}>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
});

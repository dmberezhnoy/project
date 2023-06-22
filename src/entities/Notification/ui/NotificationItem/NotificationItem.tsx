import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text';

import { INotification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface INotificationItemProps {
    className?: string;
    notification: INotification;
}

export const NotificationItem = React.memo((props: INotificationItemProps) => {
  const { className, notification } = props;

  const content = (
    <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={notification.title} text={notification.description} />
    </Card>
  );

  if (notification?.href) {
    return <a target="_blank" href={notification.href} rel="noreferrer" className={cls.link}>{content}</a>;
  }

  return content;
});

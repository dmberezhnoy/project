import React from 'react';

import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/popups';

import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = React.memo((props: INotificationButtonProps) => {
  const { className } = props;

  const popoverTrigger = (
    <Button theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <Popover
      className={classNames('', {}, [className])}
      trigger={popoverTrigger}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});

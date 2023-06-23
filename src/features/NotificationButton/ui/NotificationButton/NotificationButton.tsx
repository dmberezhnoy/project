import React, { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/popups';

import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = React.memo((props: INotificationButtonProps) => {
  const { className } = props;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOpenDrawer = useCallback(() => setIsOpenDrawer(true), []);
  const handleCloseDrawer = useCallback(() => setIsOpenDrawer(false), []);

  const popoverTrigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={handleOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames('', {}, [className])}
          trigger={popoverTrigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        {popoverTrigger}
        <AnimationProvider>
          <Drawer isOpen={isOpenDrawer} onClose={handleCloseDrawer}>
            <NotificationList
              className={classNames(cls.notifications, {}, [cls.mobileNotifications])}
            />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
});

import React from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionsClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface IPopoverProps {
    className?: string;
    trigger: React.ReactNode;
    direction?: DropdownDirection;
    children: React.ReactNode;
}

const Popover = React.memo((props: IPopoverProps) => {
  const {
    className, trigger, direction = 'bottom left', children,
  } = props;
  const menuClasses = [mapDirectionsClass[direction]];

  return (
    <HPopover className={classNames(cls.Popover, {}, [popupCls.popup, className])}>
      <HPopover.Button as="div" className={popupCls.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  );
});

export default Popover;

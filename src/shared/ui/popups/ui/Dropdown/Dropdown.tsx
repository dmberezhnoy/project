import React from 'react';

import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionsClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface IDropdownItem {
    content?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
}

interface IDropdownProps {
    className?: string;
    items: IDropdownItem[];
    trigger: React.ReactNode;
    direction?: DropdownDirection;
}

const Dropdown = React.memo((props: IDropdownProps) => {
  const {
    className, trigger, items, direction = 'bottom left',
  } = props;
  const menuClasses = [mapDirectionsClass[direction]];

  return (
    <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean}) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: active })}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={index}>
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={React.Fragment} disabled={item.disabled} key={index}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});

export default Dropdown;

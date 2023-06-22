import React from 'react';

import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';

import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionsClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface IListBoxItem {
    value: string;
    content: React.ReactNode;
    disabled?: boolean;
}

interface IListBoxProps {
    items?: IListBoxItem[];
    value?: string;
    readonly?: boolean;
    defaultValue?: string;
    className?: string;
    label?: string;
    onChange: (value: string) => void;
    direction?: DropdownDirection;
}

const ListBox: React.FC<IListBoxProps> = (props) => {
  const {
    className, items, value, defaultValue, readonly, direction = 'bottom left', label, onChange,
  } = props;

  const optionsClasses = [mapDirectionsClass[direction]];
  const labelMods = { [cls.readonly]: readonly };

  return (
    <HStack gap="4">
      {label && <span className={classNames(cls.label, labelMods)}>{`${label}>`}</span>}
      <HListBox
        as="div"
        disabled={readonly}
        className={classNames(popupCls.popup, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={cls.trigger} disabled={readonly}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={React.Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, {
                  [popupCls.active]: active,
                  [popupCls.disabled]: item.disabled,
                })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};

export default React.memo(ListBox);

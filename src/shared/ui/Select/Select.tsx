import React, { ChangeEvent, useCallback, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface ISelectOption<T extends string> {
    value: T;
    content: string;
}

interface ISelectProps<T extends string> {
    className?: string;
    label?: string;
    readonly?: boolean;
    options?: ISelectOption<T>[];
    onChange?: (value: T) => void;
    value?: T;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
  const {
    className,
    label,
    options,
    readonly,
    onChange,
    value,
  } = props;
  const handleChangeValue = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  }, [onChange]);

  const optionList = useMemo(
    () => options?.map(
      (option) => (
        <option
          className={cls.option}
          value={option.value}
          key={option.value}
        >
          {option.content}
        </option>
      ),
    ),
    [options],
  );

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && <span>{`${label}>`}</span>}
      <select
        className={cls.select}
        onChange={handleChangeValue}
        value={value}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};

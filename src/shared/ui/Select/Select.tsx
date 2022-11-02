import React, { ChangeEvent, useCallback, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface ISelectOption {
    value: string;
    content: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    readonly?: boolean;
    options?: ISelectOption[];
    onChange?: (value: string) => void;
    value?: string;
}

export const Select = React.memo((props: ISelectProps) => {
  const {
    className,
    label,
    options,
    readonly,
    onChange,
    value,
  } = props;
  const handleChangeValue = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
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
});

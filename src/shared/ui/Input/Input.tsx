import React, {
  InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface IInputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = React.memo((props: IInputProps) => {
  const {
    className,
    value,
    autoFocus,
    onChange,
    type = 'text',
    placeholder,
    readonly,
    ...restProps
  } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value: targetValue } = e.target;
    if (typeof value === 'number') {
      targetValue = targetValue.replace(/\D/gm, '');
    }
    onChange?.(targetValue);
    setCaretPosition(targetValue.length);
  };
  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);
  const handleSelect = (e: any) => setCaretPosition(e?.target?.selectionStart || 0);

  const isVisibleCaret = isFocus && !readonly;

  const mods = {
    [cls.readonly]: readonly,
  };

  return (
    <HStack className={classNames(cls.Input, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          className={cls.Input}
          type={type}
          value={value}
          readOnly={readonly}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSelect={handleSelect}
          {...restProps}
        />
        {isVisibleCaret && (<span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />)}
      </div>
    </HStack>
  );
});

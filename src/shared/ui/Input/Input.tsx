import React, {
  InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps{
    className?: string;
    value: string;
    onChange?: (value: string) => void;
}

export const Input = React.memo((props: IInputProps) => {
  const {
    className,
    value,
    autoFocus,
    onChange,
    type = 'text',
    placeholder,
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
    const { value } = e.target;
    onChange?.(value);
    setCaretPosition(value.length);
  };
  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);
  const handleSelect = (e: any) => setCaretPosition(e?.target?.selectionStart || 0);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          className={cls.Input}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSelect={handleSelect}
          {...restProps}
        />
        {isFocus && (<span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />)}
      </div>
    </div>
  );
});

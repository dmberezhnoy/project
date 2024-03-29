import React, { ButtonHTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_ATTENTION = 'outlineAttention',
    OUTLINE_INVERTED = 'outlineInverted',
    FILLED = 'filled',
    CLEAR_INVERTED = 'clearInverted',
    FILLED_INVERTED = 'filledInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    square?: boolean;
    theme?: ButtonTheme;
    size?: ButtonSize;
    fullWidth?: boolean;
}

export const Button = React.memo((props: IButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    fullWidth,
    size = ButtonSize.M,
    ...restProps
  } = props;

  const classNameMods = {
    [cls.fullWidth]: fullWidth,
    [cls.square]: square,
    [cls.disabled]: restProps.disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, classNameMods, [className, cls[theme], cls[size]])}
      {...restProps}
    >
      {children}
    </button>
  );
});

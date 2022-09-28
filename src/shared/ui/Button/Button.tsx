import React, { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...restProps
  } = props;

  return (
    <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...restProps}>
      {children}
    </button>
  );
};

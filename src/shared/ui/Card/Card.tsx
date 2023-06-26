import React, { HTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    DEFAULT = 'default',
    OUTLINED = 'outlined'
}

interface ICardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: React.ReactNode;
    theme?: CardTheme;
    maxWidth?: boolean;
}

export const Card = React.memo((props: ICardProps) => {
  const {
    className, children, theme = CardTheme.DEFAULT, maxWidth, ...restProps
  } = props;
  return (
    <div
      className={classNames(cls.Card, { [cls.maxWidth]: maxWidth }, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </div>
  );
});
